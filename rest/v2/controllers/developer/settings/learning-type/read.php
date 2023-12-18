<?php
$conn = null;
$conn = checkDbConnection();
$learningType = new LearningType($conn);
$error = [];
$returnData = [];

if (array_key_exists("learningtypeid", $_GET)) {
    $learningType->learning_type_aid = $_GET['learningtypeid'];
    checkId($learningType->learning_type_aid);
    $query = checkReadById($learningType);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($learningType);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
