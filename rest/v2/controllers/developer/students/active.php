<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/student/Student.php';

$conn = null;
$conn = checkDbConnection();

$student = new Student($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("studentid", $_GET)) {

        checkPayload($data);

        $student->students_aid = $_GET['studentid'];
        $student->students_is_active = trim($data["isActive"]);
        $student->students_datetime = date("Y-m-d H:i:s");

        checkId($student->students_aid);

        $query = checkActive($student);

        http_response_code(200);
        returnSuccess($student, "Student", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
