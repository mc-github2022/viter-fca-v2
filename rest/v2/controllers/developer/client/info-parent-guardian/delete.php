<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParentGuardian($conn);

$error = [];
$returnData = [];
if (array_key_exists("departmentid", $_GET)) {
    $parent->department_aid = $_GET['departmentid'];
    checkId($parent->department_aid);

    $query = checkDelete($department);
    returnSuccess($parent, "Department", $query);
}

checkEndpoint();
