import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const {login} = useContext(AuthContext)
    if (!login.isAuth) {
        return <Navigate to={'/login'} />;
      }
    return children
}
export default PrivateRoute;