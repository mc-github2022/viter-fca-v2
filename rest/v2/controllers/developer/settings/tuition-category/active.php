<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/TuitionCategory.php';

$conn = null;
$conn = checkDbConnection();

$tuitionCategory = new TuitionCategory($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("tuitioncategoryid", $_GET)) {

        checkPayload($data);
        $tuitionCategory->tuition_category_aid = $_GET['tuitioncategoryid'];
        $tuitionCategory->tuition_category_active = trim($data["isActive"]);
        $tuitionCategory->tuition_category_datetime = date("Y-m-d H:i:s");

        checkId($tuitionCategory->tuition_category_aid);
        $query = checkActive($tuitionCategory);
        http_response_code(200);
        returnSuccess($tuitionCategory, "Tuition Category", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
