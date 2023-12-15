<?php
$conn = null;
$conn = checkDbConnection();
$requirementIT = new RequirementIT($conn);
$error = [];
$returnData = [];
if (array_key_exists("requirementitid", $_GET)) {
    checkPayload($data);
    $requirementIT->requirement_it_aid = $_GET['requirementitid'];
    $requirementIT->requirement_it_name = checkIndex($data, "requirement_it_name");
    $requirementIT->requirement_it_department_id = checkIndex($data, "requirement_it_department_id");
    $requirementIT->requirement_it_datetime = date("Y-m-d H:i:s");
    checkId($requirementIT->requirement_it_aid);
    $requirement_it_name_old = checkIndex($data, "requirement_it_name_old");
    compareName($requirementIT, $requirement_it_name_old, $requirementIT->requirement_it_name);
    $query = checkUpdate($requirementIT);
    returnSuccess($requirementIT, "requirement_IT", $query);
}

checkEndpoint();
