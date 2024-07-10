<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$basesRate = new BaseRate($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("baseRateId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $basesRate->settings_base_rate_aid = $_GET['baseRateId'];
    $basesRate->settings_base_rate_name = checkIndex($data, "settings_base_rate_name");
    $basesRate->settings_base_rate_order = checkIndex($data, "settings_base_rate_order");
    $basesRate->settings_base_rate_updated = date("Y-m-d H:i:s");
    checkId($basesRate->settings_base_rate_aid);


    $settings_base_rate_name_old = checkIndex($data, "settings_base_rate_name_old");

    compareName($basesRate, $settings_base_rate_name_old, $basesRate->settings_base_rate_name);
    // update
    $query = checkUpdate($basesRate);
    returnSuccess($basesRate, "Base Rate", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
