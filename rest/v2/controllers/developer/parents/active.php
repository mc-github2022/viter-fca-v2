<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/parent/Parents.php';

$conn = null;
$conn = checkDbConnection();
$parent = new Parents($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("parentsid", $_GET)) {

        // payload must not be empty
        checkPayload($data);

        $parent->parents_aid = $_GET['parentsid'];
        $parent->parents_is_active = $data["isActive"];

        // validate id if empty or valid number
        checkId($parent->parents_aid);

        // update status
        $query = checkActive($parent);

        // return success
        http_response_code(200);
        returnSuccess($parent, "Parents", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
