<?php
$conn = null;
$conn = checkDbConnection();
$requirementIT = new RequirementIT($conn);
$error = [];
$returnData = [];

if (array_key_exists("requirementitid", $_GET)) {
    $requirementIT->requirement_it_aid = $_GET['requirementitid'];
    checkId($requirementIT->requirement_it_aid);
    $query = checkReadById($requirementIT);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($requirementIT);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
