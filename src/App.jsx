import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext.jsx";
import PageNotFound from "./components/partials/PageNotFound.jsx";
import { devNavUrl } from "./components/helpers/functions-general.jsx";
import Orders from "./components/pages/developer/orders/Orders.jsx";
import SystemCreatePassword from "./components/pages/access/developer/SystemCreatePassword.jsx";
import SystemLogin from "./components/pages/access/developer/SystemLogin.jsx";
import SystemForgotPassword from "./components/pages/access/developer/SystemForgotPassword.jsx";
import Settings from "./components/pages/developer/settings/settings.jsx";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<PageNotFound />} />

              <Route path={`${devNavUrl}/orders`} element={<Orders />} />

              <Route path={`${devNavUrl}/settings`} element={<Settings />} />

              {/* ACCESS */}

              <Route
                path={`${devNavUrl}/system/login`}
                element={<SystemLogin />}
              />

              <Route
                path={`${devNavUrl}/system/create-password`}
                element={<SystemCreatePassword />}
              />

              <Route
                path={`${devNavUrl}/system/forgot-password`}
                element={<SystemForgotPassword />}
              />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
