import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operation';
import { isUserLogin } from 'redux/auth/auth-selector';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
};

export default LoginPage;
