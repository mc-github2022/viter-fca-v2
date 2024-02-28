<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/all-students/AllStudents.php';

$conn = null;
$conn = checkDbConnection();
$student = new AllStudents($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {

        $student->students_start = $_GET['start'];
        $student->students_total = 10;

        checkLimitId($student->students_start, $student->students_total);

        $query = checkReadLimit($student);
        $total_result = checkReadAll($student);

        $total_data = getResultData($total_result);

        // returnError(getResultData($total_result));

        // for ($i = 0; $i < count($total_data); $i++) {
        //     $duplicates_values = [];
        //     for ($j = 0; $j < count($total_data); $j++) {
        //         $duplicates_values[] = $total_data[$j];
        //         // if ($total_data[$i]["students_aid"] == $total_data[$j]["students_aid"]) {
        //         //     $duplicates_values[] = $total_data[$j];
        //         // }
        //     }
        // }

        // if (count($duplicates_values) > 0) {
        //     returnError($duplicates_values);
        // }

        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $student->students_total,
            $student->students_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
