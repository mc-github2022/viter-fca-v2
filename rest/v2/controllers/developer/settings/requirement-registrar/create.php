<?php
$conn = null;
$conn = checkDbConnection();
$requirementRegistrar = new RequirementRegistrar($conn);
if (array_key_exists("requirementregistrarid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$requirementRegistrar->requirement_registrar_name = checkIndex($data, "requirement_registrar_name");
$requirementRegistrar->requirement_registrar_department_id = checkIndex($data, "requirement_registrar_department_id");
$requirementRegistrar->requirement_registrar_active = 1;
$requirementRegistrar->requirement_registrar_created = date("Y-m-d H:i:s");
$requirementRegistrar->requirement_registrar_datetime = date("Y-m-d H:i:s");

isNameExist($requirementRegistrar, $requirementRegistrar->requirement_registrar_name);

$query = checkCreate($requirementRegistrar);
returnSuccess($requirementRegistrar, "Requirement Registrar", $query);
