<?php
$conn = null;
$conn = checkDbConnection();
$maintenances = new SystemMode($conn);
if (array_key_exists("systemModeId", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$maintenances->system_mode_name = checkIndex($data, "system_mode_name");
$maintenances->system_mode_is_on = 0;
$maintenances->system_mode_created = date("Y-m-d H:i:s");
$maintenances->system_mode_updated = date("Y-m-d H:i:s");


// string value convert to lower case
$column_name = strtolower(str_replace(" ", "_", $data["system_mode_name"]));
// check name
isNameExist($maintenances, $maintenances->system_mode_name);
// create
$query = checkCreate($maintenances);
// add column
checkAddColumn($maintenances, $column_name);
// update column value after adding
checkUpdateColumnValue($maintenances, $column_name);

returnSuccess($maintenances, "System Mode", $query);
