<?php
$conn = null;
$conn = checkDbConnection();
$registrar = new ReqRegistrar($conn);
$error = [];
$returnData = [];
if (array_key_exists("studentid", $_GET)) {
    checkPayload($data);
    
    $registrar->requirement_registrar_student_id  = $_GET['studentid'];
    $registrar->requirement_registrar_user_id = checkIndex($data, "requirement_registrar_user_id");
    $registrar->requirement_registrar_submitted = json_encode($data["requirement_registrar_submitted"]);
    $registrar->requirement_registrar_remarks = checkIndex($data, "requirement_registrar_remarks");
    $registrar->requirement_registrar_datetime = date("Y-m-d H:i:s");
    $registrar->requirement_registrar_created = date("Y-m-d H:i:s");


    checkId($registrar->requirement_registrar_student_id);

    $query = checkUpdate($registrar);
    returnSuccess($registrar, "Requirement Registrar", $query);
}

checkEndpoint();
