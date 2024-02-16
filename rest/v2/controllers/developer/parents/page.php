<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Parent.php';

$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $parents->parents_start = $_GET['start'];
        $parents->parents_total = 10;

        // start and total of list data must not be empty and must a valid number
        checkLimitId($parents->parents_start, $parents->parents_total);

        // read limit
        $query = checkReadLimit($parents);

        // read all
        $total_result = checkReadAll($parents);

        // return data
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $parents->parents_total,
            $parents->parents_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
