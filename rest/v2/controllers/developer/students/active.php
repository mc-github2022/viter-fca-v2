<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/students/Students.php';

$conn = null;
$conn = checkDbConnection();

$student = new Students($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("studentid", $_GET)) {
     
        checkPayload($data);
        $student->student_aid = $_GET['studentid'];
        $student->student_active = trim($data["isActive"]);
        checkId($student->student_aid);
        $query = checkActive($student);
        http_response_code(200);
        returnSuccess($student, "student", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
