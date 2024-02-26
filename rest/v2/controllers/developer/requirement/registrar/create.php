<?php
$conn = null;
$conn = checkDbConnection();
$registrar = new Registrar($conn);

if (array_key_exists("reqid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);
$registrar->students_requirement_is_active = 1;
$registrar->students_requirement_student_id = checkIndex($data, "students_requirement_student_id");
$registrar->students_requirement_sy_id = checkIndex($data, "students_requirement_sy_id");
$registrar->students_requirement_id = json_encode($data["students_requirement_id"]);

$registrar->students_requirement_created = date("Y-m-d H:i:s");
$registrar->students_requirement_datetime = date("Y-m-d H:i:s");

$query = checkCreate($registrar);
returnSuccess($registrar, "Student Registrar", $query);
