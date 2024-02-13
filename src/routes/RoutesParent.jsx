import ProtectedRouteOther from "@/components/pages/access/other/ProtectedRouteOther";
import Parent from "@/components/pages/client/Client";

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
