import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import Department from "@/components/pages/developer/settings/Department/Department.jsx";
import Notification from "@/components/pages/developer/settings/Notification/Notification";
import Students from "@/components/pages/developer/students/Students";
import StudentInfo from "@/components/pages/developer/students/profile/StudentInfo.jsx";
import CodeOfConduct from "@/components/pages/developer/students/profile/code-of-conduct/CodeOfConduct.jsx";
import ParentCommitment from "@/components/pages/developer/students/profile/parent-commitment/ParentCommitment.jsx";
import ParentConsent from "@/components/pages/developer/students/profile/parent-consent/ParentConsent.jsx";
import ParentDeclaration from "@/components/pages/developer/students/profile/parent-declaration/ParentDeclaration.jsx";

export const routesSystem = [
  {
    path: `${devNavUrl}/system/settings/department`,
    element: (
      //   <ProtectedRouteSystem>
      <Department />
      //   </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/system/settings/notification`,
    element: (
      //   <ProtectedRouteSystem>
      <Notification />
      //   </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/system/students`,
    element: (
      //   <ProtectedRouteSystem>
      <Students />
      //   </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/system/student-profile`,
    element: (
      //   <ProtectedRouteSystem>
      <StudentInfo />
      //   </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/system/student-profile/code-of-conduct`,
    element: (
      //   <ProtectedRouteSystem>
      <CodeOfConduct />
      //   </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/system/student-profile/parent-declaration`,
    element: (
      //   <ProtectedRouteSystem>
      <ParentDeclaration />
      //   </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/system/student-profile/parent-consent`,
    element: (
      //   <ProtectedRouteSystem>
      <ParentConsent />
      //   </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/system/student-profile/parent-commitment`,
    element: (
      //   <ProtectedRouteSystem>
      <ParentCommitment />
      //   </ProtectedRouteSystem>
    ),
  },
];
