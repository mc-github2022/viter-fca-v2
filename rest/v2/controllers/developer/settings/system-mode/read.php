<?php
$conn = null;
$conn = checkDbConnection();
$maintenances = new SystemMode($conn);
$error = [];
$returnData = [];

if (array_key_exists("systemModeId", $_GET)) {
    $maintenances->system_mode_aid = $_GET['systemModeId'];
    checkId($maintenances->system_mode_aid);
    $query = checkReadById($maintenances);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($maintenances);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
