import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ProtectedRouteSystem from "@/components/pages/access/developer/ProtectedRouteSystem.jsx";
import SystemCreatePassword from "@/components/pages/access/developer/SystemCreatePassword.jsx";
import SystemForgotPassword from "@/components/pages/access/developer/SystemForgotPassword.jsx";
import SystemLogin from "@/components/pages/access/developer/SystemLogin.jsx";
import VerifyEmailSystemUser from "@/components/pages/access/developer/VerifyEmailSystemUser.jsx";
import Profile from "@/components/pages/developer/account/Profile.jsx";
import Client from "@/components/pages/developer/clients/Client.jsx";
import Settings from "@/components/pages/developer/settings/Settings";
import Department from "@/components/pages/developer/settings/department_old/Departmentx.jsx";
import Notification from "@/components/pages/developer/settings/notifications/Notifications";
import {
  default as System,
  default as Users,
} from "@/components/pages/developer/settings/user-system/UserSystem.jsx";
import Students from "@/components/pages/developer/students/Students";
import StudentInfo from "@/components/pages/developer/students/profile/StudentInfo.jsx";
import CodeOfConduct from "@/components/pages/developer/students/profile/code-of-conduct/CodeOfConduct.jsx";
import ParentCommitment from "@/components/pages/developer/students/profile/parent-commitment/ParentCommitment.jsx";
import ParentConsent from "@/components/pages/developer/students/profile/parent-consent/ParentConsent.jsx";
import ParentDeclaration from "@/components/pages/developer/students/profile/parent-declaration/ParentDeclaration.jsx";
import StudentProfile from "@/components/pages/developer/students/profile/student-profile/StudentProfile.jsx";

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
    path: `/${devNavUrl}/system/clients`,
    element: (
      <ProtectedRouteSystem>
        <Client />
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
    path: `${devNavUrl}/system/settings`,
    element: (
      //   <ProtectedRouteSystem>
      <Settings />
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
    path: `${devNavUrl}/system/student-information`,
    element: (
      //   <ProtectedRouteSystem>
      <StudentInfo />
      //   </ProtectedRouteSystem>
    ),
  },
];
