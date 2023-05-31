// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react';

// ** Next Import
import { useRouter } from 'next/router';

// ** Hooks Import
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { fetchUserData, selectAuth } from 'src/redux/slice/authSlice';

interface AuthGuardProps {
    children: ReactNode;
    fallback: ReactElement | null;
}

const AuthGuard = (props: AuthGuardProps) => {
    const { children, fallback } = props;
    const router = useRouter();
    const { token, loading } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    useEffect(
        () => {
            if (!router.isReady) {
                return;
            }

            if (token === null || token === '') {
                if (router.asPath !== '/') {
                    router.replace({
                        pathname: '/login',
                        query: { returnUrl: router.asPath }
                    });
                } else {
                    router.replace('/login');
                }
            }

            if (token) {
                dispatch(fetchUserData());
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.route]
    );

    if (loading || token === null || token === '') {
        return fallback;
    }

    return <>{children}</>;
};

export default AuthGuard;
