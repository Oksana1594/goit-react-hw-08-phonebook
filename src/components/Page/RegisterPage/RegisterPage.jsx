import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operation';


import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {

  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <RegisterForm onSubmit={handleSignup} />
    </>
  );
};

export default RegisterPage;
