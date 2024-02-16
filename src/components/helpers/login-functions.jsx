import { devNavUrl } from "./functions-general";

export const checkRoleToRedirect = (navigate, data) => {
  data.role_is_developer === 1
    ? navigate(`${devNavUrl}/system/students`)
    : data.role_is_parent === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/student`)
    : data.role_is_admin === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/clients`)
    : navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/settings`);
};
