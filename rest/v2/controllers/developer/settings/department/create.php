<?php
$conn = null;
$conn = checkDbConnection();
$department = new Department($conn);
if (array_key_exists("departmentid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$department->department_name = checkIndex($data, "department_name");
$department->department_active = 1;
$department->department_created = date("Y-m-d H:i:s");
$department->department_datetime = date("Y-m-d H:i:s");

isNameExist($department, $department->department_name);

$query = checkCreate($department);
returnSuccess($department, "Department", $query);
