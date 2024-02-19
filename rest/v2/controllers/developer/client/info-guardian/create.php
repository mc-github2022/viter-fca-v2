<?php
$conn = null;
$conn = checkDbConnection();
$guardian = new InfoGuardian($conn);

checkPayload($data);
$guardian->guardian_relationship_id =  checkIndex($data, "guardian_relationship_id");
$guardian->guardian_parent_id =  $data["guardian_parent_id"];
$guardian->guardian_is_reside = checkIndex($data, "guardian_is_reside");
$guardian->guardian_salutation = checkIndex($data, "guardian_salutation");
$guardian->guardian_fname = checkIndex($data, "guardian_fname");
$guardian->guardian_lname = checkIndex($data, "guardian_lname");
$guardian->guardian_mname = $data["guardian_mname"];
$guardian->guardian_maiden_name = $data["guardian_maiden_name"];
$guardian->guardian_email = checkIndex($data, "guardian_email");
$guardian->guardian_mobile = checkIndex($data, "guardian_mobile");
$guardian->guardian_landline = $data["guardian_landline"];
$guardian->guardian_address = checkIndex($data, "guardian_address");
$guardian->guardian_city = checkIndex($data, "guardian_city");
$guardian->guardian_province = checkIndex($data, "guardian_province");
$guardian->guardian_zipcode = checkIndex($data, "guardian_zipcode");
$guardian->guardian_country = checkIndex($data, "guardian_country");
$guardian->guardian_religion = checkIndex($data, "guardian_religion");
$guardian->guardian_occupation = checkIndex($data, "guardian_occupation");
$guardian->guardian_created = date("Y-m-d H:i:s");
$guardian->guardian_datetime = date("Y-m-d H:i:s");

$fullname = "$guardian->guardian_fname, $guardian->guardian_lname";

isNameExist($guardian, $fullname);  

$query = checkCreate($guardian);
returnSuccess($guardian, "", $query);


checkEndpoint();