<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Department.php';

$conn = null;
$conn = checkDbConnection();

$department = new Department($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("departmentid", $_GET)) {
     
        checkPayload($data);
        $department->department_aid = $_GET['departmentid'];
        $department->department_active = trim($data["isActive"]);
        checkId($department->department_aid);
        $query = checkActive($department);
        http_response_code(200);
        returnSuccess($department, "Department", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
