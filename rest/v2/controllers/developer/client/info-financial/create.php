<?php
$conn = null;
$conn = checkDbConnection();
$infoFinancial = new InfoFinancial($conn);
if (array_key_exists("infofinancial", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$infoFinancial->financial_info_user_id = checkIndex($data, "financial_info_user_id");
$infoFinancial->financial_info_father_income = checkIndex($data, "financial_info_father_income");
$infoFinancial->financial_info_mother_income = checkIndex($data, "financial_info_mother_income");
$infoFinancial->financial_info_financer_income = checkIndex($data, "financial_info_financer_income");
$infoFinancial->financial_info_financer_full_name = checkIndex($data, "financial_info_financer_full_name");
$infoFinancial->financial_info_financer_relationship = checkIndex($data, "financial_info_financer_relationship");
$infoFinancial->financial_info_financer_occupation = checkIndex($data, "financial_info_financer_occupation");
$infoFinancial->financial_info_created = date("Y-m-d H:i:s");
$infoFinancial->financial_info_datetime = date("Y-m-d H:i:s");

// isNameExist($infoFinancial, $infoFinancial->contact_name);

$query = checkCreate($infoFinancial);
returnSuccess($infoFinancial, "InfoContact", $query);