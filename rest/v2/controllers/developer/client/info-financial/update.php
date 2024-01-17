<?php
$conn = null;
$conn = checkDbConnection();
$infoFinancial = new InfoFinancial($conn);
$error = [];
$returnData = [];
if (array_key_exists("infofinancial", $_GET)) {
    checkPayload($data);
    $infoFinancial->financial_info_aid = $_GET['infofinancial'];
    $infoFinancial->financial_info_user_id = checkIndex($data, "financial_info_user_id");
    $infoFinancial->financial_info_father_income = checkIndex($data, "financial_info_father_income");
    $infoFinancial->financial_info_mother_income = checkIndex($data, "financial_info_mother_income");
    $infoFinancial->financial_info_financer_income = checkIndex($data, "financial_info_financer_income");
    $infoFinancial->financial_info_financer_full_name = checkIndex($data, "financial_info_financer_full_name");
    $infoFinancial->financial_info_financer_relationship = checkIndex($data, "financial_info_financer_relationship");
    $infoFinancial->financial_info_financer_occupation = checkIndex($data, "financial_info_financer_occupation");
    $infoFinancial->financial_info_datetime = date("Y-m-d H:i:s");
    checkId($infoFinancial->financial_info_aid);

    // $contact_name_old = checkIndex($data, "contact_name_old");
    // compareName($infoContact, $contact_name_old, $infoContact->contact_name);
    
    $query = checkUpdate($infoFinancial);
    returnSuccess($infoFinancial, "Info Contact", $query);
}

checkEndpoint();
