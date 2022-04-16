import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequirAuth = ({ children }) => {
  const [user, UserLoading] = useAuthState(auth);
  let location = useLocation();

  if (UserLoading) {
    return <p>Loading...</p>;
  }
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
};

export default RequirAuth;
