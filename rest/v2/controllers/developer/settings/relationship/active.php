<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Relationship.php';

$conn = null;
$conn = checkDbConnection();

$relationship = new Relationship($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("relationshipid", $_GET)) {

        checkPayload($data);
        $relationship->relationship_aid = $_GET['relationshipid'];
        $relationship->relationship_active = trim($data["isActive"]);
        $relationship->relationship_datetime = date("Y-m-d H:i:s");

        checkId($relationship->relationship_aid);
        $query = checkActive($relationship);
        http_response_code(200);
        returnSuccess($relationship, "relationship", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
