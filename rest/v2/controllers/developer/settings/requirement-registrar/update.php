<?php
$conn = null;
$conn = checkDbConnection();
$requirementRegistrar = new RequirementRegistrar($conn);
$error = [];
$returnData = [];
if (array_key_exists("requirementregistrarid", $_GET)) {
    checkPayload($data);
    $requirementRegistrar->requirement_registrar_aid = $_GET['requirementregistrarid'];
    $requirementRegistrar->requirement_registrar_name = checkIndex($data, "requirement_registrar_name");
    $requirementRegistrar->requirement_registrar_is_for_pre_school = checkIndex($data, "requirement_registrar_is_for_pre_school");
    // $requirementRegistrar->requirement_registrar_department_id = checkIndex($data, "requirement_registrar_department_id");
    $requirementRegistrar->requirement_registrar_datetime = date("Y-m-d H:i:s");
    checkId($requirementRegistrar->requirement_registrar_aid);
    $requirement_registrar_name_old = checkIndex($data, "requirement_registrar_name_old");
    compareName($requirementRegistrar, $requirement_registrar_name_old, $requirementRegistrar->requirement_registrar_name);
    $query = checkUpdate($requirementRegistrar);
    returnSuccess($requirementRegistrar, "requirement_registrar", $query);
}

checkEndpoint();
