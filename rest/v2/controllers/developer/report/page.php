<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/report/Report.php';

$conn = null;
$conn = checkDbConnection();
$student = new Report($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {

        // $student->students_start = $_GET['start'];
        // $student->students_total = 20;
        $student->school_year_students_sy_id = $data["syId"];
        // checkLimitId($student->students_start, $student->students_total);

        // $query = checkReadLimit($student);
        // $total_result = checkReadAll($student);

        // http_response_code(200);
        // checkReadQuery(
        //     $query,
        //     $total_result,
        //     $student->students_total,
        //     $student->students_start
        // );

        $query = checkReadAll($student);

        http_response_code(200);
        getQueriedData($query);
        // return 404 error if endpoint not available
        checkEndpoint();
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
