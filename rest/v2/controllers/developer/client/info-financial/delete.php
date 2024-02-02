<?php
$conn = null;
$conn = checkDbConnection();
$infoFinancial = new InfoFinancial($conn);

$error = [];
$returnData = [];
if (array_key_exists("financialinfoaid", $_GET)) {
    $infoFinancial->financial_info_aid = $_GET['financialinfoaid'];
    checkId($infoFinancial->financial_info_aid );
    $query = checkDelete($infoFinancial);
    returnSuccess($infoFinancial, "Financier", $query);
}

checkEndpoint();
