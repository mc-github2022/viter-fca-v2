import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import Department from "@/components/pages/developer/settings/Department/Department.jsx";
import Notification from "@/components/pages/developer/settings/Notification/Notification";
import Students from "@/components/pages/developer/students/Students";
import StudentProfile from "@/components/pages/developer/students/profile/StudentProfile";

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
      <StudentProfile />
      //   </ProtectedRouteSystem>
    ),
  },
];
