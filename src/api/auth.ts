import { getAxiosClient, getAxiosClientWithToken } from 'api';
import { LoginRequest } from '../redux/slice/loginSlice';

export const login = (params: LoginRequest) => {
    return getAxiosClient().post('admin/login', params);
};

export const getUserData = () => {
    return getAxiosClientWithToken().get('admin/profile');
};
