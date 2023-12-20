import React from "react";
import { Navigate } from "react-router-dom";
import { devNavUrl, UrlSystem } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData.jsx";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import { setCredentials } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const ProtectedRouteSystem = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const fbastoken = JSON.parse(localStorage.getItem("fbastoken"));

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await queryData(`/v1/user-system/token`, "post", {
        token: fbastoken.token,
      });

      console.log(login);

      if (typeof login === "undefined" || !login.success) {
        setLoading(false);
        setIsAuth("456");
      } else {
        dispatch(setCredentials(login.data));
        setIsAuth("123");
        setLoading(false);
      }
      delete login.data.user_system_password;
      delete login.data.role_description;
      delete login.data.role_created;
      delete login.data.role_datetime;
    };

    if (fbastoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("fbastoken");
      setIsAuth("456");
    }
  }, [dispatch]);

  return loading ? (
    <TableSpinner />
  ) : isAuth === "123" ? (
    children
  ) : isAuth === "456" ? (
    <Navigate to={`${devNavUrl}/${UrlSystem}/login`} />
  ) : (
    <p>API end point error / Page not found.</p>
  );
};

export default ProtectedRouteSystem;
