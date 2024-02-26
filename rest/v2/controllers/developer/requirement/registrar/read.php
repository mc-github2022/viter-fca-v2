<?php
$conn = null;
$conn = checkDbConnection();
$registrar = new Registrar($conn);


if (array_key_exists("reqid", $_GET)) {
    $registrar->students_requirements_student_id = $_GET['reqid'];

    checkId($registrar->students_requirements_student_id);
    $query = checkReadById($registrar);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($registrar);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
