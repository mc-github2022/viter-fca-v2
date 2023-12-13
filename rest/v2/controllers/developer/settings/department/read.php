<?php
$conn = null;
$conn = checkDbConnection();
$department = new Department($conn);
$error = [];
$returnData = [];

if (array_key_exists("departmentid", $_GET)) {
    $department->department_aid = $_GET['departmentid'];
    checkId($department->department_aid);
    $query = checkReadById($department);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($department);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
