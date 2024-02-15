<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Staff.php';

$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $staff->settings_staff_start = $_GET['start'];
        $staff->settings_staff_total = 10;

        // start and total of list data must not be empty and must a valid number
        checkLimitId($staff->settings_staff_start, $staff->settings_staff_total);

        // read limit
        $query = checkReadLimit($staff);

        // read all
        $total_result = checkReadAll($staff);

        // return data
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $staff->settings_staff_total,
            $staff->settings_staff_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
