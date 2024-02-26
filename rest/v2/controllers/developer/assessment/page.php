<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/assessment/Assessment.php';

$conn = null;
$conn = checkDbConnection();
$assessment_list = new Assessment($conn);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $assessment_list->student_start = $_GET['start'];
        $assessment_list->student_total = 10;

        // start and total of list data must not be empty and must a valid number
        checkLimitId($assessment_list->student_start, $assessment_list->student_total);

        // read limit
        $query = checkReadLimit($assessment_list);

        // read all
        $total_result = checkReadAll($assessment_list);

        // return data
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $assessment_list->student_total,
            $assessment_list->student_start
        );
    }

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
