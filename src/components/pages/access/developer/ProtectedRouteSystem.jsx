import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import PageNotFound from "@/components/partials/PageNotFound";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import {
  setCredentials,
  setMessage,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRouteSystem = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const fcatoken = JSON.parse(localStorage.getItem("fcatoken"));
  const navigate = useNavigate();
  const currentPath =
    location.pathname.split("/")[1] === devNavUrl.split("/")[1]
      ? location.pathname.split("/")[2]
      : location.pathname.split("/")[1];
  const [pageStatus, setPageStatus] = React.useState(false);

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await queryData(`/v2/dev-user-system/token`, "post", {
        token: fcatoken.token,
        isDev: true,
      });

      console.log(login);

      if (typeof login === "undefined" || !login.success || login.count === 0) {
        localStorage.removeItem("fcatoken");
        navigate(`${devNavUrl}/system/login`);
        setLoading(false);
        setIsAuth("456");
        dispatch(setValidate(true));
        dispatch(setMessage(login.error));
      } else {
        dispatch(setCredentials(login.data));
        setIsAuth("123");
        setLoading(false);
        delete login.data.user_system_password;
        delete login.data.role_description;
        delete login.data.role_created;
        delete login.data.role_datetime;
      }

      if (
        !login.success ||
        (login.data.role_name.toLowerCase() === "developer"
          ? "system"
          : login.data.role_name.toLowerCase()) !== currentPath
      ) {
        setPageStatus(true);
      }
    };

    if (fcatoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("fcatoken");
      setIsAuth("456");
    }
  }, [dispatch]);

  if (pageStatus) {
    return <PageNotFound />;
  } else {
    return (
      <>
        {loading ? (
          <FetchingSpinner />
        ) : isAuth === "123" ? (
          children
        ) : isAuth === "456" ? (
          <Navigate to={`${devNavUrl}/system/login`} />
        ) : (
          <p>API end point error / Page not found.</p>
        )}
      </>
    );
  }
};

export default ProtectedRouteSystem;
