import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getCurrent } from 'redux/auth/auth-operation';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent);
  }, [dispatch]);
  return <>{children}</>;
};

export default AuthProvider;
