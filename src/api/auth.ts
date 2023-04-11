import { getAxiosClient, getAxiosClientWithToken } from '../api';
import { LoginRequest } from 'src/redux/slice/loginSlice';

export const login = (params: LoginRequest) => {
    return getAxiosClient().post('login', params);
};

export const getUserData = () => {
    return getAxiosClientWithToken().get('profile');
};
