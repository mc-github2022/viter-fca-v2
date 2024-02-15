import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ProtectedRouteOther from "@/components/pages/access/other/ProtectedRouteOther";
import Parents from "@/components/pages/parents/Parents.jsx";
import Student from "@/components/pages/parents/student/Student.jsx";

export const routesParent = [
  {
    path: `/${devNavUrl}/parent/student`,
    element: (
      <ProtectedRouteOther>
        <Student />
      </ProtectedRouteOther>
    ),
  },

  {
    path: `/${devNavUrl}/parent/information`,
    element: (
      // <ProtectedRouteOther>
      <Parents />
      // </ProtectedRouteOther>
    ),
  },
];
