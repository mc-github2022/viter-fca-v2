<?php
$conn = null;
$conn = checkDbConnection();
$infoFinancial = new InfoFinancial($conn);

$error = [];
$returnData = [];
if (array_key_exists("infofinancial", $_GET)) {
    $infoFinancial->financial_info_aid = $_GET['infofinancial'];
    checkId($infoFinancial->financial_info_aid );
    $query = checkDelete($infoFinancial);
    returnSuccess($infoFinancial, "Department", $query);
}

checkEndpoint();
