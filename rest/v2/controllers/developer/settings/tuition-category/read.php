<?php
$conn = null;
$conn = checkDbConnection();
$tuitionCategory = new TuitionCategory($conn);
$error = [];
$returnData = [];

if (array_key_exists("tuitioncategoryid", $_GET)) {
    $tuitionCategory->tuition_category_aid = $_GET['tuitioncategoryid'];
    checkId($tuitionCategory->tuition_category_aid);
    $query = checkReadById($tuitionCategory);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($tuitionCategory);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
