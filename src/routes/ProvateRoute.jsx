import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const ProvateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center -mt-10">
        <span className="loading loading-spinner text-info "></span>
        <p>Please Wait and stay here...</p>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" />;
};

ProvateRoute.propTypes = {
  children: PropTypes.node,
};

export default ProvateRoute;
