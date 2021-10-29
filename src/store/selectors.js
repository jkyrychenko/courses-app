export const getCourses = (state) => state.allCourses.courses;
export const getAuthors = (state) => state.allAuthors.authors;
export const getUser = (state) => state.user;
export const getUserName = (state) => state.user.name;
export const getUserStatus = (state) => state.user.isAuth;
export const getUserRole = (state) => state.user.role;
export const isAdmin = (state) => Boolean(state.user.role === 'admin');
export const courseError = (state) => state.allCourses.error;
export const authorsError = (state) => state.allAuthors.error;
