import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import Department from "@/components/pages/developer/settings/Department/Department.jsx";

export const routesSystem = [
  {
    path: `${devNavUrl}/system/settings/department`,
    element: (
      //   <ProtectedRouteSystem>
      <Department />
      //   </ProtectedRouteSystem>
    ),
  },
];
