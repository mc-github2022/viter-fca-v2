<?php
$conn = null;
$conn = checkDbConnection();
$assessment_list = new Assessment($conn);

// only if read by id
if (array_key_exists("studentId", $_GET)) {
    $assessment_list->students_aid = $_GET['studentId'];

    // validate id if empty or valid number
    checkId($assessment_list->students_aid);

    // read by id
    $query = checkReadById($assessment_list);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

// only if read all
if (empty($_GET)) {

    // read all
    $query = checkReadAll($assessment_list);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
