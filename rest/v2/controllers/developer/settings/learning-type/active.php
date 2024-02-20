<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/LearningType.php';

$conn = null;
$conn = checkDbConnection();

$learningType = new LearningType($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("learningtypeid", $_GET)) {

        checkPayload($data);
        $learningType->learning_type_aid = $_GET['learningtypeid'];
        $learningType->learning_type_active = trim($data["isActive"]);
        $learningType->learning_type_datetime = date("Y-m-d H:i:s");

        checkId($learningType->learning_type_aid);
        $query = checkActive($learningType);
        http_response_code(200);
        returnSuccess($learningType, "Learning Type", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
