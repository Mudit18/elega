import { REFERRAL_MAIL_TEMPLATE } from '@/app/components/assets/templates/templates';
import Loader from '@/app/components/common/Loader';
import Rating from '@/app/components/common/Rating';
import { addDocument, collections, convertDateToFirebaseTimestamp, documentExistsWhere, documentExistsWhere2 } from '@/app/firebase/firebaseUtils';
import { sendMail } from '@/utils/MailUtils';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function NewReferral(props) {
    const { user } = props;
    const initialState = { linkedInUrl: '', email: '', referredByUserId: user.id, status: 'Email Sent', rating: null, comments: '' };
    const [referralDetails, setReferralDetails] = useState(initialState);
    const [loading, setLoading] = useState(false);

    async function refer(referralDetails) {
        if (isEmpty(referralDetails.linkedInUrl)) {
            toast.error('LinkedIn URL not provided')
            return;
        }
        if (isEmpty(referralDetails.email)) {
            toast.error('Email not provided')
            return;
        }
        referralDetails.referredOn = convertDateToFirebaseTimestamp(new Date());
        setLoading(true);
        try {
            // Check if someone has already referred this user
            const referralExists = await documentExistsWhere2(collections.REFERRALS, 'email', '==', referralDetails.email, 'status', '!=', 'Email Sent');
            if (referralExists) {
                toast.error('User already referred');
                setLoading(false);
                return;
            }
        } catch (e) {
            console.log(e);
            toast.error('Error occurred');
            setLoading(false);
            return;
        }
        try {
            const refDoc = await addDocument('referrals', referralDetails);
            const emailData = {
                to: referralDetails.email,
                subject: `${user?.name} has invited you to Elega`,
                text: null,
                html: REFERRAL_MAIL_TEMPLATE.replace(/{referredBy}/g, user.name).replace(/{link}/g, 'https://www.elega.co.in/refer/join?refId=' + refDoc?.result?.id)
            };
            sendMail(emailData);
            setReferralDetails(initialState);
            setLoading(false);
            toast.success('Referral submitted successfully');
        } catch (e) {
            console.error(e);
            setLoading(false);
            toast.error('Error occurred');
        }
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center !bg-customDarkBg1">
            <div className="d-flex align-items-center justify-content-center w-full">
                <div className="card mb-0 pb-0 lg:px-8 lg:py-4 !bg-transparent !shadow-sm lg:w-1/2 flex justify-center items-center">
                    <div className="lg:w-3/4 !pb-0">
                        <h2 className="text-center text-white mb-10">Add referral details</h2>
                        <>
                            <div className="mb-3">
                                <label htmlFor="exampleInputtext1" className="form-label text-white">LinkedIn URL</label>
                                <input type="text" value={referralDetails.linkedInUrl} onChange={(event) => { setReferralDetails({ ...referralDetails, linkedInUrl: event.target.value }) }} className="form-control text-white" aria-describedby="textHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">Email</label>
                                <input type="email" value={referralDetails.email} onChange={(event) => { setReferralDetails({ ...referralDetails, email: event.target.value }) }} className="form-control text-white" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">How would you rate the candidate?</label>
                                <Rating onRatingChange={(rating) => setReferralDetails({ ...referralDetails, rating })} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Your recommendation</label>
                                <textarea value={referralDetails.comments} onChange={(event) => { setReferralDetails({ ...referralDetails, comments: event.target.value }) }} className="form-control text-white h-20 !pb-4" />
                            </div>
                            <button onClick={() => refer(referralDetails)} className="btn btn-primary w-100 py-8 fs-4 mt-4 rounded-2">Submit Referral</button>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
