<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$basesRate = new BaseRate($conn);
// get should not be present
if (array_key_exists("baseRateId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$basesRate->settings_base_rate_is_active = 1;
$basesRate->settings_base_rate_name = checkIndex($data, "settings_base_rate_name");
$basesRate->settings_base_rate_created = date("Y-m-d H:i:s");
$basesRate->settings_base_rate_updated = date("Y-m-d H:i:s");

// check name
isNameExist($basesRate, $basesRate->settings_base_rate_name);
// create
$query = checkCreate($basesRate);
returnSuccess($basesRate, "Base Rate", $query);
