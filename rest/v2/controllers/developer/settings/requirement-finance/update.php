<?php
$conn = null;
$conn = checkDbConnection();
$requirementFinance = new RequirementFinance($conn);
$error = [];
$returnData = [];
if (array_key_exists("requirementfinanceid", $_GET)) {
    checkPayload($data);
    $requirementFinance->requirement_finance_aid = $_GET['requirementfinanceid'];
    $requirementFinance->requirement_finance_name = checkIndex($data, "requirement_finance_name");
    $requirementFinance->requirement_finance_department_id = checkIndex($data, "requirement_finance_department_id");
    $requirementFinance->requirement_finance_datetime = date("Y-m-d H:i:s");
    checkId($requirementFinance->requirement_finance_aid);
    $requirement_finance_name_old = checkIndex($data, "requirement_finance_name_old");
    compareName($requirementFinance, $requirement_finance_name_old, $requirementFinance->requirement_finance_name);
    $query = checkUpdate($requirementFinance);
    returnSuccess($requirementFinance, "requirement_finance", $query);
}

checkEndpoint();
