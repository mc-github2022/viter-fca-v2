<?php
$conn = null;
$conn = checkDbConnection();
$maintenances = new SystemMode($conn);

$error = [];
$returnData = [];
if (array_key_exists("systemModeId", $_GET)) {
    $maintenances->system_mode_aid = $_GET['systemModeId'];
    $column_name = strtolower($data['item']);
    checkId($maintenances->system_mode_aid);

    $query = checkDelete($maintenances);
    checkDropColumnName($maintenances, $column_name);
    returnSuccess($maintenances, "System Mode", $query);
}

checkEndpoint();
