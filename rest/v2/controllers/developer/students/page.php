<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/student-info/StudentInfo.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$student = new StudentInfo($conn);
// $student = new StudentInfo();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        // get task id from query string
        $student->student_start = $_GET['start'];
        $student->student_total = 10;
        //check to see if task id in query string is not empty and is number, if not return json error
        checkLimitId($student->student_start, $student->student_total);

        $query = checkReadLimit($student);
        $total_result = checkReadAll($student);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $student->student_total,
            $student->student_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
