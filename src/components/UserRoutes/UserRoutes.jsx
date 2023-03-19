import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import PrivetRoute from 'components/PrivetRoute/PrivetRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('components/Page/HomePage/HomePage'));

const NotFoundPage = lazy(() =>
  import('components/Page/NotFoundPage/NotFoundPage')
);
const RegisterPage = lazy(() =>
  import('components/Page/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('components/Page/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('components/Page/ContactsPage/ContactsPage')
);

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      }
    >
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivetRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
