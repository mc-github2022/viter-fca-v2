<?php
$conn = null;
$conn = checkDbConnection();
$registrar = new ReqRegistrar($conn);
if (array_key_exists("gradelevelid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$registrar->requirement_registrar_user_id = checkIndex($data, "registrar_name");
$registrar->requirement_registrar_submitted = checkIndex($data, "registrar_is_pre_school");
$registrar->requirement_registrar_remarks = checkIndex($data, "requirement_registrar_remarks");

$registrar->requirement_registrar_datetime = date("Y-m-d H:i:s");
$registrar->requirement_registrar_created = date("Y-m-d H:i:s");

$query = checkCreate($registrar);
returnSuccess($registrar, "Grade Level", $query);
