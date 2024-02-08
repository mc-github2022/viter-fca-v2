<?php
$conn = null;
$conn = checkDbConnection();
$registrar = new ReqRegistrar($conn);
$error = [];
$returnData = [];

if (array_key_exists("studentid", $_GET)) {
    $registrar->requirement_registrar_student_id = $_GET['studentid'];
    checkId($registrar->requirement_registrar_student_id);
    $query = checkReadByStudentId($registrar);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($registrar);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
