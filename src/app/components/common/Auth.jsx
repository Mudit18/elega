import { useSession } from 'next-auth/react';
import Loader from './Loader';
import { useRouter } from 'next/navigation';

export function Auth(Component) {
    return function AuthWrapper(props) {
        const { data: session, status } = useSession();
        const router = useRouter();

        if (status === 'loading') {
            return <Loader />;
        }

        if (status === 'authenticated' && session) {
            return <Component {...props} />;
        } else {
            try {
                signIn('linkedin', {
                    callbackUrl: process.env.NEXTAUTH_URL
                });
                return null;
            } catch (e) {
                router.replace('/refer');
                return null;
            }
        }
    };
}
