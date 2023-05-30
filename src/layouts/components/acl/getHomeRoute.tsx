import { ROLE_CLIENT } from 'src/configs/constant';

/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: number) => {
    if (role === ROLE_CLIENT) {
        return '';
    } else {
        return 'dashboard';
    }
};

export default getHomeRoute;
