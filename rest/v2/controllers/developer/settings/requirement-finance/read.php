<?php
$conn = null;
$conn = checkDbConnection();
$requirementFinance = new RequirementFinance($conn);
$error = [];
$returnData = [];

if (array_key_exists("requirementfinanceid", $_GET)) {
    $requirementFinance->requirement_finance_aid = $_GET['requirementfinanceid'];
    checkId($requirementFinance->requirement_finance_aid);
    $query = checkReadById($requirementFinance);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($requirementFinance);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
