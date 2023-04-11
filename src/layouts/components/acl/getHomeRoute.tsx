import { ROLE_CLIENT } from 'src/configs/constant';

/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
    if (role === ROLE_CLIENT) {
        return '';
    } else {
        return 'admin/';
    }
};

export default getHomeRoute;
