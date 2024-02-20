<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/SchoolYear.php';

$conn = null;
$conn = checkDbConnection();
$sy = new SchoolYear($conn);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $sy->school_year_start = $_GET['start'];
        $sy->school_year_total = 10;

        // start and total of list data must not be empty and must a valid number
        checkLimitId($sy->school_year_start, $sy->school_year_total);

        // read limit
        $query = checkReadLimit($sy);

        // read all
        $total_result = checkReadAll($sy);

        // return data
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $sy->school_year_total,
            $sy->school_year_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
