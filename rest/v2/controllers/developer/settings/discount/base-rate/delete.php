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
    // get data
    $basesRate->settings_base_rate_aid = $_GET['baseRateId'];
    checkId($basesRate->settings_base_rate_aid);

    // isAssociated($basesRate);
    $query = checkDelete($basesRate);
    returnSuccess($basesRate, "Base Rate", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
