<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/settings/SchoolYear.php';

$conn = null;
$conn = checkDbConnection();
$sy = new SchoolYear($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("syid", $_GET)) {

        // payload must not be empty
        checkPayload($data);

        $sy->school_year_aid = $_GET['syid'];
        $sy->school_year_enrollment_start_date = $data["school_year_enrollment_start_date"];
        $sy->school_year_enrollment_end_date = $data["school_year_enrollment_end_date"];
        $sy->school_year_is_enrollment_open = $data["school_year_is_enrollment_open"];

        // validate id if empty or valid number
        checkId($sy->school_year_aid);

        // $school_year_enrollment_start_date_old = $data["school_year_enrollment_start_date_old"];

        // only if email is changed, then check if already exist
        // compareEmail($sy, $school_year_enrollment_start_date_old, $sy->school_year_start_date);

        // update status
        $query = checkUpdateEnrollmentDate($sy);

        // return success
        http_response_code(200);
        returnSuccess($sy, "Staff", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
