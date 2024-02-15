<?php
$conn = null;
$conn = checkDbConnection();
$maintenances = new SystemMode($conn);
$error = [];
$returnData = [];
if (array_key_exists("maintenanceId", $_GET)) {
    checkPayload($data);
    $maintenances->system_mode_aid = $_GET['maintenanceId'];
    $maintenances->system_mode_name = checkIndex($data, "system_mode_name");
    $maintenances->system_mode_updated = date("Y-m-d H:i:s");
    checkId($maintenances->system_mode_aid);
    $system_mode_name_old = checkIndex($data, "system_mode_name_old");
    compareName($maintenances, $system_mode_name_old, $maintenances->system_mode_name);
    $query = checkUpdate($maintenances);
    returnSuccess($maintenances, "System Mode", $query);
}

checkEndpoint();
