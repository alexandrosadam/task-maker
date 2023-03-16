import { URLS } from "@constants/urls";
import useAuth from "@hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to={URLS.login} state={{ from: location }} replace />
      )}
    </>
  );
};

export default PrivateRoute;
