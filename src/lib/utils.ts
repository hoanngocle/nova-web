import { ROLE_ADMIN, ROLE_SUPER_ADMIN } from 'src/configs/constant';

export const isDevMode = () => {
    return process.env.NODE_ENV === 'development';
};

export const isSuperAdmin = (role: number) => {
    return role === ROLE_SUPER_ADMIN;
};

export const isAdmin = (role: number) => {
    return role === ROLE_ADMIN;
};
