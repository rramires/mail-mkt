/**
 * Token name
 */
export const TOKEN = "mailmtk-token";


/**
 * Check if authentication token exists
 */
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;


/**
 * Return if authentication token exists
 */
export const getToken = () => localStorage.getItem(TOKEN);


/**
 * Set token on localStorage
 */
export const login = (token) => {
    localStorage.setItem(TOKEN, token);
}


/**
 * Remove token from localStorage
 */
export const logout = () => {
    localStorage.removeItem(TOKEN);
}