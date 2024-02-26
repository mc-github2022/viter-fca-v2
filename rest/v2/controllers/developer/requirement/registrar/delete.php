<?php
$conn = null;
$conn = checkDbConnection();
$registrar = new Registrar($conn);

if (array_key_exists("reqid", $_GET)) {
    checkPayload($data);

    $registrar->students_requirement_aid = $_GET['reqid'];
    checkId($registrar->students_requirement_aid);

    $query = checkDelete($registrar);

    returnSuccess($registrar, "Requirement Registrar", $query);
}

checkEndpoint();
