// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react';

// ** Next Import
import { useRouter } from 'next/router';

// ** Hooks Import
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { fetchUserData, selectAuth } from 'src/redux/slice/authSlice';

interface GuestGuardProps {
    children: ReactNode;
    fallback: ReactElement | null;
}

const GuestGuard = (props: GuestGuardProps) => {
    const { children, fallback } = props;
    const router = useRouter();
    const { token, loading } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    console.log('Guest Guard');

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        if (token) {
            dispatch(fetchUserData());

            router.replace('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, token, router.route]);

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/login', { state: { from: location }, replace: true });
    //     }
    // }, [token, location, navigate]);

    if (loading || (!loading && token == null)) {
        return fallback;
    }

    return <>{children}</>;
};

export default GuestGuard;
