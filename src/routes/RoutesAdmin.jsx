import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ProtectedRouteOther from "@/components/pages/access/other/ProtectedRouteOther.jsx";
import Profile from "@/components/pages/admin/account/Profile.jsx";
import AllStudents from "@/components/pages/admin/all-students/AllStudents";
import Assestment from "@/components/pages/admin/assessment/Assestment";
import Clients from "@/components/pages/admin/clients/Clients.jsx";
import ClientViewInfo from "@/components/pages/admin/clients/client-info/ClientViewInfo";
import ClientStudentViewInfo from "@/components/pages/admin/clients/student-info/ClientStudentViewInfo.jsx";
import ReportsStudent from "@/components/pages/admin/report/ReportsStudent";
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
    path: `${devNavUrl}/admin/enrollment`,
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

  // All students
  {
    path: `${devNavUrl}/admin/students`,
    element: (
      <ProtectedRouteOther>
        <AllStudents />
      </ProtectedRouteOther>
    ),
  },

  // Assessment
  {
    path: `${devNavUrl}/admin/assessment`,
    element: (
      <ProtectedRouteOther>
        <Assestment />
      </ProtectedRouteOther>
    ),
  },

  // Report
  {
    path: `${devNavUrl}/admin/report`,
    element: (
      <ProtectedRouteOther>
        <ReportsStudent />
      </ProtectedRouteOther>
    ),
  },
];
