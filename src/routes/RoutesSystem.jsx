import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ProtectedRouteSystem from "@/components/pages/access/developer/ProtectedRouteSystem.jsx";
import SystemCreatePassword from "@/components/pages/access/developer/SystemCreatePassword.jsx";
import SystemForgotPassword from "@/components/pages/access/developer/SystemForgotPassword.jsx";
import SystemLogin from "@/components/pages/access/developer/SystemLogin.jsx";
import VerifyEmailSystemUser from "@/components/pages/access/developer/VerifyEmailSystemUser.jsx";
import Profile from "@/components/pages/developer/account/Profile.jsx";
import Clients from "@/components/pages/developer/clients/Clients.jsx";
import ClientViewInfo from "@/components/pages/developer/clients/client-info/ClientViewInfo";
import Department from "@/components/pages/developer/settings/Department/Department";

import Discount from "@/components/pages/developer/settings/discount/Discount";
import { default as System } from "@/components/pages/developer/settings/user-system/UserSystem.jsx";
import Students from "@/components/pages/developer/students/Students";
import StudentViewInfo from "@/components/pages/developer/students/student-info/StudentViewInfo.jsx";

export const routesSystem = [
  {
    path: `${devNavUrl}/system/verify-email`,
    element: <VerifyEmailSystemUser />,
  },
  {
    path: `/${devNavUrl}/system/login`,
    element: <SystemLogin />,
  },
  {
    path: `/${devNavUrl}/system/forgot-password`,
    element: <SystemForgotPassword />,
  },
  {
    path: `/${devNavUrl}/system/create-password`,
    element: <SystemCreatePassword />,
  },

  {
    path: `/${devNavUrl}/system/profile`,
    element: (
      <ProtectedRouteSystem>
        <Profile />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `/${devNavUrl}/system/discount`,
    element: (
      <ProtectedRouteSystem>
        <Discount />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `/${devNavUrl}/system/clients`,
    element: (
      <ProtectedRouteSystem>
        <Clients />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `/${devNavUrl}/system/clients/information`,
    element: (
      <ProtectedRouteSystem>
        <ClientViewInfo />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/system/settings/users`,
    element: (
      //   <ProtectedRouteSystem>
      <System />
      //   </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/system/settings/department`,
    element: (
      //   <ProtectedRouteSystem>
      <Department />
      //   </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/system/students`,
    element: (
      <ProtectedRouteSystem>
        <Students />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/system/students/information`,
    element: (
      <ProtectedRouteSystem>
        <StudentViewInfo />
      </ProtectedRouteSystem>
    ),
  },
];
