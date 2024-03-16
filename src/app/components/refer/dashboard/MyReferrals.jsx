import React, { useEffect, useState } from 'react'
import Divider from '../../common/Divider'
import { useSession } from 'next-auth/react'
import { checkIfCurrentMonth, convertTimestampToDate, documentExistsWhere, documentExistsWhere2, getDocument, getDocumentsWhere, setDocument } from '@/app/firebase/firebaseUtils';
import Loader from '../../common/Loader';
import Cookies from 'js-cookie';
import { isEmpty } from 'lodash';

function getBgColorForStatus(status) {
    switch (status) {
        case 'Active':
            return 'secondary';
        case 'Under Review':
            return 'danger';
        case 'Hired':
            return 'success';
        default:
            return 'primary';
    }
}

export default function MyReferrals() {
    const { data: session } = useSession();
    const [referrals, setReferrals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        monthlyReferrals: 0,
        successRate: 0,
        totalReferrals: 0,
    });

    useEffect(() => {
        const { user } = session;
        const refId = Cookies.get('refId');

        async function handleReferral() {
            if (refId) {
                const [{ result }, alreadyReferred] = await Promise.all([
                    getDocument('referrals', refId),
                    documentExistsWhere2('referrals', 'userId', '==', user.id, 'status', '!=', 'Email Sent')
                ])
                const data = result.data();
                // Referral counts only when:
                // 1. Referral status is email sent
                // 2. User has not referred himself/herself
                // 3. Existing referral does not already exist for the user
                if (data?.status === 'Email Sent' && data.referredByUserId !== user.id && !alreadyReferred) {
                    await setDocument('referrals', refId, { status: 'Under Review', userId: user.id });
                }
                Cookies.remove('refId');
            }
        }

        async function getReferrals() {
            const { result, error } = await getDocumentsWhere('referrals', 'referredByUserId', '==', user.id);
            const refs = [];
            let monthlyCount = 0;
            let successCount = 0;
            if (!isEmpty(result)) {
                result.forEach((doc) => {
                    const data = doc.data();
                    refs.push({
                        id: doc.id,
                        linkedInUrl: data.linkedInUrl,
                        email: data.email,
                        status: data.status,
                        referredOn: convertTimestampToDate(data.referredOn)
                    });
                    if (checkIfCurrentMonth(data.referredOn)) {
                        monthlyCount++;
                    }
                    if (data.status === 'Hired') {
                        successCount++;
                    }
                });
                setReferrals(refs);
                setStats({
                    monthlyReferrals: monthlyCount,
                    successRate: refs.length > 0 ? ((successCount * 100.0) / refs.length).toFixed(1) : 0,
                    totalReferrals: refs.length
                });
            }
        }
        getReferrals()
            .then(() => {
                setLoading(false);
            });
        handleReferral();
    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <div className="container-fluid !bg-customDarkBg1 !h-screen !pr-0 !pb-2">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card !shadow-lg overflow-hidden !bg-customDarkBg2">
                        <div className="card-body p-4">
                            <h5 className="mb-9 fw-semibold text-customSecondary">Monthly Referrals</h5>
                            <div className="row align-items-center">
                                <h4 className="fw-semibold mb-3 text-xxl text-white"><h1 className="fw-semibold mb-3 text-xxl text-white">{stats.monthlyReferrals}</h1> out of 5</h4>
                                <div className="col-4">
                                    <div className="d-flex justify-content-center">
                                        <div id="breakup"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card !shadow-lg overflow-hidden !bg-customDarkBg2">
                        <div className="card-body p-4">
                            <h5 className="mb-9 fw-semibold text-customSecondary">Success Rate</h5>
                            <div className="row align-items-center w-full">
                                <h4 className="fw-semibold mb-3 text-xxl text-white"><h1 className="fw-semibold mb-3 text-xxl text-white">{stats.successRate}%</h1>out of {stats.totalReferrals} referrals</h4>
                                <div className="col-4">
                                    <div className="d-flex justify-content-center">
                                        <div id="breakup"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row w-full">
                <div className="col-lg-16 d-flex align-items-stretch">
                    <div className="card !shadow-lg w-100 !bg-customDarkBg2 pb-4">
                        <div className="card-body p-4 !pr-0">
                            <div className="table-responsive mb-10 max-h-[50vh] !pr-10">
                                <table className="table text-nowrap mb-0 align-middle">
                                    <thead className="sticky top-0 text-dark fs-4 !border-b-2 !border-customGrayBorder !bg-customDarkBg2">
                                        <tr>
                                            <th className="border-bottom-4">
                                                <h6 className="fw-semibold mb-0 text-customSecondary">Email</h6>
                                            </th>
                                            <th className="border-bottom-2">
                                                <h6 className="fw-semibold mb-0 text-customSecondary">LinkedIn</h6>
                                            </th>
                                            <th className="border-bottom-2">
                                                <h6 className="fw-semibold mb-0 text-customSecondary">Status</h6>
                                            </th>
                                            <th className="border-bottom-2">
                                                <h6 className="fw-semibold mb-0 text-customSecondary text-right">Referred On</h6>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {referrals.map((r) =>
                                        (
                                            <tr key={r.id}>
                                                <td className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-1 text-white">{r.email}</h6>
                                                </td>
                                                <td className="border-bottom-0 text-white">
                                                    <a target="_blank" rel="noopener noreferrer" href={r.linkedInUrl} className="mb-0 fw-normal text-white">{r.linkedInUrl}</a>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className={"badge rounded-3 fw-semibold text-white " + 'bg-' + getBgColorForStatus(r.status)}>{r.status}</span>
                                                    </div>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0 fs-4 text-white text-right">{r.referredOn}</h6>
                                                </td>
                                            </tr>
                                        )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <Divider className="!w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
