<?php
$conn = null;
$conn = checkDbConnection();
$scheme = new Scheme($conn);
$error = [];
$returnData = [];
if (array_key_exists("schemeid", $_GET)) {
    $scheme->scheme_aid = $_GET['schemeid'];
    checkId($scheme->scheme_aid);

    //isAssociated($scheme);
    $query = checkDelete($scheme);
    returnSuccess($scheme, "Scheme", $query);
}

checkEndpoint();
