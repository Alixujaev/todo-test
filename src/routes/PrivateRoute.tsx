import { Navigate } from "react-router";

export const PrivateRoute = ({ isLogged, children }: any) => {
  return isLogged ? children : <Navigate to="/" />;
};
