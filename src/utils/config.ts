export const BASE_URL = import.meta.env.VITE_BASE_URL_DEV;
const PREFIX = 'api/';

export const CURR_USER_DATA_URL = `${PREFIX}users/user`;
export const LOGOUT_URL         = `${PREFIX}auth/logout`;
export const LOGIN_URL          = `${PREFIX}auth/login`;
export const GOOGLE_LOGIN_URL   = `${BASE_URL}${PREFIX}auth/login/google`;
export const GOOGLE_SIGNUP_URL  = `${BASE_URL}${PREFIX}auth/register/google/`;
