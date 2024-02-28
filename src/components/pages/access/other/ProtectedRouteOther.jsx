import PageNotFound from "@/components/partials/PageNotFound";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData.jsx";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import {
  setCredentials,
  setMessage,
  setValidate,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const ProtectedRouteOther = ({ children }) => {
  const { store, dispatch } = React.useContext(StoreContext);
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
    const fetchIsMaintenance = async () => {
      const isMaintenance = await queryData(
        `/v2/dev-system-mode/maintenance-mode` // endpoint
      );

      if (isMaintenance?.count > 0) {
        localStorage.removeItem("fcatoken");
        navigate(`${devNavUrl}/login`);
        setLoading(false);
        setIsAuth("456");
      }
    };

    const fetchLogin = async () => {
      const login = await queryData(`/v2/user-other/token`, "post", {
        token: fcatoken.token,
      });

      console.log(login);

      if (typeof login === "undefined" || !login.success || login.count === 0) {
        localStorage.removeItem("fcatoken");
        navigate(`${devNavUrl}/login`);
        setLoading(false);
        setIsAuth("456");
        dispatch(setValidate(true));
        dispatch(setMessage(login.error));
      } else {
        dispatch(setCredentials(login.data));
        setIsAuth("123");
        setLoading(false);
        delete login.data.user_other_password;
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
      fetchIsMaintenance();
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
          <Navigate to={`${devNavUrl}/login`} />
        ) : (
          <p>API end point error / Page not found.</p>
        )}
      </>
    );
  }
};

export default ProtectedRouteOther;
