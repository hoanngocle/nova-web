import axios, { AxiosError } from 'axios';
import { store } from 'src/redux/store';
import { isDevMode } from 'src/lib/utils';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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
        baseURL: API_URL
    });
};

/**
 * Call axios.create and append header with token
 **/
export const getAxiosClientWithToken = () => {
    const client = getAxiosClient();
    client.defaults.headers.common['Authorization'] = 'Bearer ' + store.getState().auth.token;
    client.defaults.headers.common['Api-Authorization'] = API_KEY;
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
