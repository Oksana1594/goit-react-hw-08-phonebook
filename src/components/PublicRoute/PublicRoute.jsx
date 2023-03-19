import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import { getAuth } from "redux/auth/auth-selector";

const PublicRoute = () => {
    const {isLogin, token} = useSelector(getAuth)

    if (!isLogin && token) {
        return   <Oval
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

    if (isLogin) {
        return <Navigate to="/contacts"/>
    }

    return <Outlet/>
    
}

export default PublicRoute;