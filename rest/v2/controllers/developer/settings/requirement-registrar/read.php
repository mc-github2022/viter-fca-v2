<?php
$conn = null;
$conn = checkDbConnection();
$requirementRegistrar = new RequirementRegistrar($conn);
$error = [];
$returnData = [];

if (array_key_exists("requirementregistrarid", $_GET)) {
    $requirementRegistrar->requirement_registrar_aid = $_GET['requirementregistrarid'];
    checkId($requirementRegistrar->requirement_registrar_aid);
    $query = checkReadById($requirementRegistrar);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($requirementRegistrar);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
