const USER_TOKEN = 'userToken';

export const setToken = (token) => localStorage.setItem(USER_TOKEN, token);
export const getToken = () => localStorage.getItem(USER_TOKEN);

const isTokenExist = () => Boolean(localStorage.getItem(USER_TOKEN));

export default isTokenExist;
