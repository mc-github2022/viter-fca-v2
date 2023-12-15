<?php
$conn = null;
$conn = checkDbConnection();
$requirementFinance = new RequirementFinance($conn);
if (array_key_exists("requirementfinanceid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$requirementFinance->requirement_finance_name = checkIndex($data, "requirement_finance_name");
$requirementFinance->requirement_finance_department_id = checkIndex($data, "requirement_finance_department_id");
$requirementFinance->requirement_finance_active = 1;
$requirementFinance->requirement_finance_created = date("Y-m-d H:i:s");
$requirementFinance->requirement_finance_datetime = date("Y-m-d H:i:s");

isNameExist($requirementFinance, $requirementFinance->requirement_finance_name);

$query = checkCreate($requirementFinance);
returnSuccess($requirementFinance, "Requirement Finance", $query);
