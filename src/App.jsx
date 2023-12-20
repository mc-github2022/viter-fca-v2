import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { devNavUrl } from "./components/helpers/functions-general.jsx";

import SystemLogin from "./components/pages/access/login/SystemLogin.jsx";
import Department from "./components/pages/developer/settings/Department/Department.jsx";
import Users from "./components/pages/developer/settings/users/Users.jsx";
import PageNotFound from "./components/partials/PageNotFound.jsx";
import { StoreProvider } from "./components/store/StoreContext.jsx";
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

              <Route path={`${devNavUrl}/settings/users`} element={<Users />} />

              {/* ACCESS */}

              <Route
                path={`${devNavUrl}/system/login`}
                element={<SystemLogin />}
              />

              {/* SYSTEM USER ROUTE */}
              {routesSystem.map(({ ...routeProps }, key) => {
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
