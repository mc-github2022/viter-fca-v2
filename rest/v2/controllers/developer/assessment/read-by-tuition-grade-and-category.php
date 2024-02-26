<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/assessment/Assessment.php';

$conn = null;
$conn = checkDbConnection();
$assessment_list = new Assessment($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    // check api key
    checkApiKey();

    // payload must not be empty
    checkPayload($data);
    $assessment_list->grade_level_aid = checkIndex($data, "gradeId");
    $assessment_list->tuition_category_aid = checkIndex($data, "categoryId");

    // read all
    $query = checkReadByCategoryAndGrade($assessment_list);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
