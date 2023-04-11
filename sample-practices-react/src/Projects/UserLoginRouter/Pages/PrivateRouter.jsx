import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuth } from "../Context/auth-user";

const PrivateRoute = ({ children, ...rest }) => {
  const Location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Route {...rest}>
        {isAuthenticated ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: Location }} />
        )}
      </Route>
    </>
  );
};

export default PrivateRoute;
