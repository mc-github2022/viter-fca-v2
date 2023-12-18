<?php
$conn = null;
$conn = checkDbConnection();
$tuitionCategory = new TuitionCategory($conn);
if (array_key_exists("tuitioncategoryid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$tuitionCategory->tuition_category_name = checkIndex($data, "tuition_category_name");
$tuitionCategory->tuition_category_active = 1;
$tuitionCategory->tuition_category_created = date("Y-m-d H:i:s");
$tuitionCategory->tuition_category_datetime = date("Y-m-d H:i:s");

isNameExist($tuitionCategory, $tuitionCategory->tuition_category_name);

$query = checkCreate($tuitionCategory);
returnSuccess($tuitionCategory, "Tuition Category", $query);
