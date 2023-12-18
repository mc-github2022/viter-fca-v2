<?php
$conn = null;
$conn = checkDbConnection();
$scheme = new Scheme($conn);
if (array_key_exists("schemeid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$scheme->scheme_name = checkIndex($data, "scheme_name");
$scheme->scheme_active = 1;
$scheme->scheme_created = date("Y-m-d H:i:s");
$scheme->scheme_datetime = date("Y-m-d H:i:s");

isNameExist($scheme, $scheme->scheme_name);

$query = checkCreate($scheme);
returnSuccess($scheme, "Scheme", $query);
