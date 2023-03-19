export const isUserLogin = ({ auth }) => auth.isLogin;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const getName = ({ auth }) => auth.user;
export const selectLoading = ({ auth }) => auth.loading;
