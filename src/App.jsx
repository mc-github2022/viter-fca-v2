import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { devNavUrl } from "./components/helpers/functions-general.jsx";

import SystemCreatePassword from "./components/pages/access/developer/SystemCreatePassword.jsx";
import SystemForgotPassword from "./components/pages/access/developer/SystemForgotPassword.jsx";
import SystemLogin from "./components/pages/access/developer/SystemLogin.jsx";
import OtherCreateAccount from "./components/pages/access/other/OtherCreateAccount.jsx";
import OtherCreatePassword from "./components/pages/access/other/OtherCreatePassword.jsx";
import OtherForgotPassword from "./components/pages/access/other/OtherForgotPassword.jsx";
import OtherLogin from "./components/pages/access/other/OtherLogin.jsx";
import ProtectedRouteOther from "./components/pages/access/other/ProtectedRouteOther.jsx";
import Users from "./components/pages/developer/settings/user-system/UserSystem.jsx";
import Header from "./components/partials/Header.jsx";
import PageNotFound from "./components/partials/PageNotFound.jsx";
import { StoreProvider } from "./components/store/StoreContext.jsx";
import { routesParent } from "./routes/RoutesParent.jsx";
import { routesSystem } from "./routes/RoutesSystem.jsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<PageNotFound />} />
              <Route path={`${devNavUrl}/login`} element={<OtherLogin />} />
              <Route path={`${devNavUrl}`} element={<OtherLogin />} />
              <Route
                path={`${devNavUrl}/settings/users`}
                element={<Users />}
              />{" "}
              <Route
                path={`${devNavUrl}/system/login`}
                element={<SystemLogin />}
              />
              <Route
                path={`${devNavUrl}/system/forgot-password`}
                element={<SystemForgotPassword />}
              />
              <Route
                path={`${devNavUrl}/forgot-password`}
                element={<OtherForgotPassword />}
              />
              <Route
                path={`${devNavUrl}/system/create-password`}
                element={<SystemCreatePassword />}
              />
              <Route
                path={`${devNavUrl}/create-password`}
                element={<OtherCreatePassword />}
              />
              <Route
                path={`${devNavUrl}/create-account`}
                element={<OtherCreateAccount />}
              />
              {/* SYSTEM USER ROUTE  */}
              {routesSystem.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}
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
