import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ProtectedRouteOther from "@/components/pages/access/other/ProtectedRouteOther.jsx";
import Profile from "@/components/pages/admin/account/Profile.jsx";
import Clients from "@/components/pages/admin/clients/Clients.jsx";
import StudentView from "@/components/pages/admin/clients/StudentView";
import ClientViewInfo from "@/components/pages/admin/clients/client-info/ClientViewInfo";
import ClientStudentViewInfo from "@/components/pages/admin/clients/student-info/ClientStudentViewInfo.jsx";
import Discount from "@/components/pages/admin/settings/discount/Discount";
import Students from "@/components/pages/admin/students/Students";
import StudentViewInfo from "@/components/pages/admin/students/student-info/StudentViewInfo.jsx";

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
    path: `/${devNavUrl}/admin/discount`,
    element: (
      <ProtectedRouteOther>
        <Discount />
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
