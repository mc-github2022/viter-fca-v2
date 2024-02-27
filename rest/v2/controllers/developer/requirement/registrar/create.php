<?php
$conn = null;
$conn = checkDbConnection();
$registrar = new Registrar($conn);

if (array_key_exists("reqid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$registrar->students_requirements_is_active = 1;
$registrar->students_requirements_student_id = checkIndex($data, "students_requirements_student_id");
$registrar->students_requirements_sy_id = checkIndex($data, "students_requirements_sy_id");
$registrar->students_requirements_id = checkIndex($data, "students_requirements_id");
$registrar->students_requirements_created = date("Y-m-d H:i:s");
$registrar->students_requirements_datetime = date("Y-m-d H:i:s");
$query = checkCreate($registrar);

returnSuccess($registrar, "Student Registrar", $query);
