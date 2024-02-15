<?php
$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);

// only if read by id
if (array_key_exists("staffid", $_GET)) {
    $staff->settings_staff_aid = $_GET['staffid'];

    // validate id if empty or valid number
    checkId($staff->settings_staff_aid);

    // read by id
    $query = checkReadById($staff);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

// only if read all
if (empty($_GET)) {

    // read all
    $query = checkReadAll($staff);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
