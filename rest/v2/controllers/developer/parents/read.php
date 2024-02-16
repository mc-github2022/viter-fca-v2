<?php
$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);

// only if read by id
if (array_key_exists("parentsid", $_GET)) {
    $parents->parents_aid = $_GET['parentsid'];

    // validate id if empty or valid number
    checkId($parents->parents_aid);

    // read by id
    $query = checkReadById($parents);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

// only if read all
if (empty($_GET)) {

    // read all
    $query = checkReadAll($parents);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
