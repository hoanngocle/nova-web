import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            index: true,
            element: <Navigate replace to={'/'} />,
        },
        {
            path: '/login',
            element: <BlankLayout />,
            children: [
                {
                    path: '/login',
                    element: <Login />,
                },
            ],
        },
    ]);
};

export default Router;
