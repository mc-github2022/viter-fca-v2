<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/all-students/AllStudents.php';

$conn = null;
$conn = checkDbConnection();
$student = new AllStudents($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $student->students_search = checkIndex($data, "searchValue");

    $query = checkSearch($student);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();