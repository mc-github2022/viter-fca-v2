<?php
$conn = null;
$conn = checkDbConnection();
$registrar = new Registrar($conn);

if (array_key_exists("reqid", $_GET) && array_key_exists("studentid", $_GET)) {

    $registrar->students_requirements_id = $_GET['reqid'];
    $registrar->students_requirements_student_id = $_GET['studentid'];

    $query = checkDelete($registrar);

    returnSuccess($registrar, "Requirement Registrar", $query);
}

checkEndpoint();
