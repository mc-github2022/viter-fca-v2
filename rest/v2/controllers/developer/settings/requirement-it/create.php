<?php
$conn = null;
$conn = checkDbConnection();
$requirementIT = new RequirementIT($conn);
if (array_key_exists("requirementITid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$requirementIT->requirement_it_name = checkIndex($data, "requirement_it_name");
$requirementIT->requirement_it_department_id = checkIndex($data, "requirement_it_department_id");
$requirementIT->requirement_it_active = 1;
$requirementIT->requirement_it_created = date("Y-m-d H:i:s");
$requirementIT->requirement_it_datetime = date("Y-m-d H:i:s");

isNameExist($requirementIT, $requirementIT->requirement_it_name);

$query = checkCreate($requirementIT);
returnSuccess($requirementIT, "Requirement IT", $query);
