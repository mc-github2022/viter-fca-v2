<?php
$conn = null;
$conn = checkDbConnection();
$scheme = new Scheme($conn);
$error = [];
$returnData = [];
if (array_key_exists("schemeid", $_GET)) {
    checkPayload($data);
    $scheme->scheme_aid = $_GET['schemeid'];
    $scheme->scheme_name = checkIndex($data, "scheme_name");
    $scheme->scheme_datetime = date("Y-m-d H:i:s");
    checkId($scheme->scheme_aid);
    $scheme_name_old = checkIndex($data, "scheme_name_old");
    compareName($scheme, $scheme_name_old, $scheme->scheme_name);
    $query = checkUpdate($scheme);
    returnSuccess($scheme, "Learning Type", $query);
}

checkEndpoint();
