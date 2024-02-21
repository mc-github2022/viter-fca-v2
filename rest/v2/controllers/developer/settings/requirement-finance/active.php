<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/requirementFinance.php';

$conn = null;
$conn = checkDbConnection();

$requirementFinance = new RequirementFinance($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("requirementfinanceid", $_GET)) {

        checkPayload($data);
        $requirementFinance->requirement_finance_aid = $_GET['requirementfinanceid'];
        $requirementFinance->requirement_finance_active = trim($data["isActive"]);
        $requirementFinance->requirement_finance_datetime = date("Y-m-d H:i:s");

        checkId($requirementFinance->requirement_finance_aid);
        $query = checkActive($requirementFinance);
        http_response_code(200);
        returnSuccess($requirementFinance, "Requirement Finance", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
