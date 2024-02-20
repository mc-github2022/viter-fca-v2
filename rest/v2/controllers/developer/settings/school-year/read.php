<?php
$conn = null;
$conn = checkDbConnection();
$sy = new SchoolYear($conn);

// only if read by id
if (array_key_exists("syid", $_GET)) {
    $sy->school_year_aid = $_GET['syid'];

    // validate id if empty or valid number
    checkId($sy->school_year_aid);

    // read by id
    $query = checkReadById($sy);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

// only if read all
if (empty($_GET)) {

    // read all
    $query = checkReadAll($sy);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
