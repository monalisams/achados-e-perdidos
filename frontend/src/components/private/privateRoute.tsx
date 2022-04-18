import { Navigate } from "react-router-dom";

const PrivateRoute = (props: any) => {
  const children: any = props.children;
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
