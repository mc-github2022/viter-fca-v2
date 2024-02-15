import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ProtectedRouteAdmin from "@/components/pages/access/admin/ProtectedRouteAdmin";
import Students from "@/components/pages/admin/students/Students";

export const routesParent = [
  {
    path: `/${devNavUrl}/admin/student`,
    element: (
      <ProtectedRouteAdmin>
        <Students />
      </ProtectedRouteAdmin>
    ),
  },
];
