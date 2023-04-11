import { Roles } from 'src/types';

/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: Roles[]) => {
    console.log(role);

    if (role === 'client') {
        return '';
    } else {
        return 'admin/';
    }
};

export default getHomeRoute;
