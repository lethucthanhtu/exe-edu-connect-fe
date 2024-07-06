export const BASE_URL = import.meta.env.VITE_BASE_URL_DEV;
const PREFIX = 'api/';

export const CURR_USER_DATA_URL = `${PREFIX}users/user`;
export const SUBJECT_URL        = `${PREFIX}course/categories`;
export const REGISTER_URL       = `${PREFIX}auth/register`
export const LOGOUT_URL         = `${PREFIX}auth/logout`;
export const LOGIN_URL          = `${PREFIX}auth/login`;
export const GOOGLE_LOGIN_URL   = `${BASE_URL}${PREFIX}auth/login/google`;
export const GOOGLE_SIGNUP_URL  = `${BASE_URL}${PREFIX}auth/register/google/`;
export const COURSES_URL        = `${PREFIX}courses`;
export const MEET_URL           = `${PREFIX}meetings/create`
export const TRANSACTION_URL    = `${PREFIX}transactions`

export const DEFAULT_IMG = `https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg`;
export const IDOL_IMG    = `https://t.vietgiaitri.com/2021/9/9/chia-se-len-fanpage-video-ghep-sieu-dinh-cua-fan-viet-thanh-nu-eimi-fukada-boi-roi-khi-bi-cdm-viet-doi-tri-an-cac-6052818.jpeg`;
