<?php

require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/client/client-student/ClientStudent.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
$student = new ClientStudent($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();


    $student->current_students_sy_id = $data["current_students_sy_id"];
    $student->current_students_student_id = $data["current_students_student_id"];

    $student->students_fname = $data["students_fname"];
    $student->students_lname = $data["students_lname"];

    $fullname = "$student->students_fname $student->students_lname";

    // check data
    $query = isStudentExist($student, $fullname);
    http_response_code(200);
    getQueriedData($query);
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
