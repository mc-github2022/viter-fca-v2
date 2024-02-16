import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ProtectedRouteOther from "@/components/pages/access/other/ProtectedRouteOther.jsx";
import Profile from "@/components/pages/admin/account/Profile.jsx";
import StudentViewInfo from "@/components/pages/admin/students/student-info/StudentViewInfo.jsx";
import Clients from "@/components/pages/admin/clients/Clients.jsx";
import StudentView from "@/components/pages/developer/clients/StudentView";
import ClientViewInfo from "@/components/pages/developer/clients/client-info/ClientViewInfo";
import ClientStudentViewInfo from "@/components/pages/developer/clients/student-info/ClientStudentViewInfo.jsx";
import Students from "@/components/pages/admin/students/Students";

export const routesAdmin = [
  {
    path: `/${devNavUrl}/admin/profile`,
    element: (
      <ProtectedRouteOther>
        <Profile />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `/${devNavUrl}/admin/clients`,
    element: (
      <ProtectedRouteOther>
        <Clients />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `/${devNavUrl}/admin/clients/information`,
    element: (
      <ProtectedRouteOther>
        <ClientViewInfo />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `/${devNavUrl}/admin/clients/students`,
    element: (
      <ProtectedRouteOther>
        <ClientStudentViewInfo />
      </ProtectedRouteOther>
    ),
  },

  //student Card

  {
    path: `/${devNavUrl}/admin/clients/view/student-list`,
    element: (
      <ProtectedRouteOther>
        <StudentView />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/admin/students`,
    element: (
      <ProtectedRouteOther>
        <Students />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/admin/students/information`,
    element: (
      <ProtectedRouteOther>
        <StudentViewInfo />
      </ProtectedRouteOther>
    ),
  },
];
