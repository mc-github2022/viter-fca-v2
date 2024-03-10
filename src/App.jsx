import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { devNavUrl } from "./components/helpers/functions-general.jsx";

import React from "react";
import { queryData } from "./components/helpers/queryData.jsx";
import OtherCreateAccount from "./components/pages/access/other/OtherCreateAccount.jsx";
import OtherCreatePassword from "./components/pages/access/other/OtherCreatePassword.jsx";
import OtherForgotPassword from "./components/pages/access/other/OtherForgotPassword.jsx";
import OtherLogin from "./components/pages/access/other/OtherLogin.jsx";
import VerifyEmailOtherUser from "./components/pages/access/other/VerifyEmailOtherUser.jsx";
import PageNotFound from "./components/partials/PageNotFound.jsx";
import { StoreProvider } from "./components/store/StoreContext.jsx";
import { routesAdmin } from "./routes/RoutesAdmin.jsx";
import { routesParent } from "./routes/RoutesParent.jsx";
import { routesSystem } from "./routes/RoutesSystem.jsx";

function App() {
  const queryClient = new QueryClient();
  // const fcatoken = JSON.parse(localStorage.getItem("fcatoken"));

  // FUTURE CODE REFERENCE FOR ROUTING USING ROLE FOR REDIRECTION
  // const checkLogin = async () => {
  //   const login = await queryData(`/v2/user-other/token`, "post", {
  //     token: fcatoken.token,
  //   });

  //   console.log(login);
  // };

  // React.useEffect(() => {
  //   checkLogin();
  // }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              {/* PAGE NOT FOUND */}
              <Route path={`*`} element={<PageNotFound />} />

              {/* ADMIN ALL ACCESS PAGE */}
              <Route
                path={`${devNavUrl}/create-password`}
                element={<OtherCreatePassword />}
              />
              <Route
                path={`${devNavUrl}/create-account`}
                element={<OtherCreateAccount />}
              />
              <Route path={`${devNavUrl}/login`} element={<OtherLogin />} />
              <Route path={`${devNavUrl}`} element={<OtherLogin />} />
              <Route
                path={`${devNavUrl}/forgot-password`}
                element={<OtherForgotPassword />}
              />
              <Route
                path={`${devNavUrl}/verify-email`}
                element={<VerifyEmailOtherUser />}
              />

              {/* SYSTEM USER ROUTE  */}
              {routesSystem.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}

              {/* ADMIN USER ROUTE  */}
              {routesAdmin.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}

              {/* PARENT USER ROUTE  */}
              {routesParent.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
