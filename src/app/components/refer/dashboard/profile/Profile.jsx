import Loader from '@/app/components/common/Loader';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ProfileStatusStepper from './ProfileStatusStepper';
import { getDocumentsWhere2 } from '@/app/firebase/firebaseUtils';
import { isEmpty } from 'lodash';

export default function Profile(props) {
    const { data: session } = useSession();
    const { user } = session;
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState('Sign Up');

    useEffect(() => {
        async function getStatus() {
            const { result } = await getDocumentsWhere2('referrals', 'userId', '==', user.id, 'status', '!=', 'Email Sent')
            if (!isEmpty(result)) {
                let profileStatus = 'Sign Up';
                result.forEach((r) => {
                    const data = r.data();
                    profileStatus = data.status === 'Under Review' ? 'Under Review' : 'Active';
                })
                setStatus(profileStatus);
            }
            setLoading(false);
        }
        getStatus();
    }, [user])

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center !bg-customDarkBg1">
            <div className="d-flex align-items-center justify-content-center w-full">
                <div className="card mb-0 pb-0 lg:px-8 lg:py-4 !bg-transparent !shadow-sm w-full flex justify-center items-center">
                    <div className="lg:w-3/4 !pb-0 flex justify-center items-center flex-col">
                        <Image src={user ? user?.picture : "/user-1.jpg"} alt="" width="64" height="64" className="rounded-circle mb-4" />
                        <h2 className="text-center text-white mb-16">{session.user.name}</h2>
                        <ProfileStatusStepper status={status} />
                    </div>
                </div>
            </div>
        </div>
    )
}
