import { devNavUrl } from "./functions-general";

export const checkRoleToRedirect = (navigate, data) => {
  data.role_is_developer === 1
    ? navigate(`${devNavUrl}/system/students`) // developer
    : data.role_is_parent === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/information`) // parents
    : navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/students`); // admin
};
