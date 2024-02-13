import ProtectedRouteOther from "@/components/pages/access/other/ProtectedRouteOther";
import Parent from "@/components/pages/client/Parent";

export const routesParent = [
  {
    path: `/${devNavUrl}/client/parent`,
    element: (
      <ProtectedRouteOther>
        <Parent />
      </ProtectedRouteOther>
    ),
  },
];
