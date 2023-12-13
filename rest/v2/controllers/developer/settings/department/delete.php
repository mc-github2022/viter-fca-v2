<?php
$conn = null;
$conn = checkDbConnection();
$department = new Department($conn);
$error = [];
$returnData = [];
if (array_key_exists("departmentid", $_GET)) {
    $department->department_aid = $_GET['departmentid'];
    checkId($department->department_aid);

    //isAssociated($department);
    $query = checkDelete($department);
    returnSuccess($department, "Department", $query);
}

checkEndpoint();
