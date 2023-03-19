// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/contacts/contacts-selectors';
// import { Suspense, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Oval } from 'react-loader-spinner';


// import { Route, Routes } from 'react-router-dom';
// import { Oval } from 'react-loader-spinner';

// import PrivetRoute from 'components/PrivetRoute/PrivetRoute';
// import PublicRoute from 'components/PublicRoute/PublicRoute';
// import { Layout } from 'components/Layout/Layout';

import Container from 'components/Shared/Container';
import Navbar from 'components/Navbar/Navbar';

// const HomePage = lazy(() => import('components/Page/HomePage/HomePage'));

// const NotFoundPage = lazy(() =>
//   import('components/Page/NotFoundPage/NotFoundPage')
// );
// const RegisterPage = lazy(() =>
//   import('components/Page/RegisterPage/RegisterPage')
// );
// const LoginPage = lazy(() =>
//   import('components/Page/LoginPage/LoginPage')
// );
// const ContactsPage = lazy(() =>
//   import('components/Page/ContactsPage/ContactsPage')
// );



// import Navbar from 'components/Navbar/Navbar';
import UserRoutes from 'components/UserRoutes/UserRoutes';

// import Form from 'components/Form/Form';
// import ContactList from 'components/Contacts/ContactsList/ContactsList';
// import FieldToFilter from 'components/FieldToFilter/FieldToFilter';

// import MainTitle from 'components/Shared/MaineTitle';
// import Title from 'components/Shared/Title';


const App = () => {


  return (
    <Container>
      <Navbar />
      <UserRoutes/>
    </Container>
    // <Container>
    //           <Suspense
    //   fallback={
    //     <Oval
    //       height={80}
    //       width={80}
    //       color="#4fa94d"
    //       wrapperStyle={{}}
    //       wrapperClass=""
    //       visible={true}
    //       ariaLabel="oval-loading"
    //       secondaryColor="#4fa94d"
    //       strokeWidth={2}
    //       strokeWidthSecondary={2}
    //     />
    //   }
    // >
    //   <Routes>
    //       {/* <Route path="/" element={<Layout />} /> */}
    //       <Route path="/" element={ <Navbar/>} />
    //         <Route index element={<HomePage />} />
    //     <Route element={<PublicRoute/>}>
    //         <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     </Route>
      
    //     <Route element={<PrivetRoute/>}>
    //       <Route path="/contacts" element={<ContactsPage />} />
    //     </Route>
        
      
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Routes>
    // </Suspense>
    // </Container>

  );
};
export default App;
