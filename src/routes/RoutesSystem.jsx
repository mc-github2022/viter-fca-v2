import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import Department from "@/components/pages/developer/settings/Department/Department.jsx";
import Notification from "@/components/pages/developer/settings/Notification/Notification";

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
];
