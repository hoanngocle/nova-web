import axios, { AxiosError } from 'axios';
import { store } from 'redux/store';
import { isDevMode } from 'lib/utils';

const BASE_URL = process.env.REACT_APP_API_URL;

type Error = {
    data: any;
    message: string;
    errors?: any;
};

/**
 * Call axios.create without token on the header
 **/
export const getAxiosClient = () => {
    return axios.create({
        baseURL: BASE_URL
    });
};

/**
 * Call axios.create and append header with token
 **/
export const getAxiosClientWithToken = () => {
    const client = getAxiosClient();
    client.defaults.headers.common['Authorization'] = 'Bearer ' + store.getState().auth.token;
    client.defaults.headers.common['Content-Type'] = 'application/json';
    client.defaults.headers.common['Accept'] = 'application/json';

    return client;
};

export const getErrorMessage = (error: AxiosError) => {
    const { status } = error.response || {};
    const { data: errors, errors: validateErrors, message } = error.response?.data as Error;

    if (status && status === 422) {
        return validateErrors ?? errors ?? message;
    }
    if (status && status < 500) {
        return message;
    }

    if (isDevMode()) console.error(error);

    return 'Server Error';
};
