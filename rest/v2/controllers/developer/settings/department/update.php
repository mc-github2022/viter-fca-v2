<?php
$conn = null;
$conn = checkDbConnection();
$department = new Department($conn);
$error = [];
$returnData = [];
if (array_key_exists("departmentid", $_GET)) {
    checkPayload($data);
    $department->department_aid = $_GET['departmentid'];
    $department->department_name = checkIndex($data, "department_name");
    $department->department_description = checkIndex($data, "department_description");
    $department->department_datetime = date("Y-m-d H:i:s");
    checkId($department->department_aid);
    $department_name_old = checkIndex($data, "department_name_old");
    compareName($department, $department_name_old, $department->department_name);
    $query = checkUpdate($department);
    returnSuccess($department, "Department", $query);
}

checkEndpoint();
