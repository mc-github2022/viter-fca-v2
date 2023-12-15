<?php
$conn = null;
$conn = checkDbConnection();
$requirementFinance = new RequirementFinance($conn);
$error = [];
$returnData = [];
if (array_key_exists("requirementfinanceid", $_GET)) {
    $requirementFinance->requirement_finance_aid = $_GET['requirementfinanceid'];
    checkId($requirementFinance->requirement_finance_aid);

    //isAssociated($notification);
    $query = checkDelete($requirementFinance);
    returnSuccess($requirementFinance, "Requirement Finance", $query);
}

checkEndpoint();
