<?php
$conn = null;
$conn = checkDbConnection();
$sy = new SchoolYear($conn);

if (array_key_exists("syid", $_GET)) {
    checkPayload($data);

    $sy->school_year_aid = $_GET['syid'];
    $sy->school_year_start_date = checkIndex($data, "school_year_start_date");
    $sy->school_year_end_date = checkIndex($data, "school_year_end_date");
    $sy->school_year_is_enrollment_open = checkIndex($data, "school_year_is_enrollment_open");
    $sy->school_year_datetime = date("Y-m-d H:i:s");

    // validate id if empty or valid number
    checkId($sy->school_year_aid);

    $school_year_start_date_old = checkIndex($data, "school_year_start_date_old");

    // only if email is changed, then check if already exist
    compareName($sy, $school_year_start_date_old, $sy->school_year_start_date);

    // update
    $query = checkUpdate($sy);

    // return success
    returnSuccess($sy, "School year", $query);
}

checkEndpoint();
