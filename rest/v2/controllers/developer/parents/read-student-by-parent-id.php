<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/parent/Parents.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// only if read by id
if (array_key_exists("parentsid", $_GET)) {
    $parents->parents_aid = $_GET['parentsid'];

    // validate id if empty or valid number
    checkId($parents->parents_aid);

    // read by id
    $query = checkReadStudentByParentId($parents);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
