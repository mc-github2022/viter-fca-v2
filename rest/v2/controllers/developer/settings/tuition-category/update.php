<?php
$conn = null;
$conn = checkDbConnection();
$tuitionCategory = new TuitionCategory($conn);
$error = [];
$returnData = [];
if (array_key_exists("tuitioncategoryid", $_GET)) {
    checkPayload($data);
    $tuitionCategory->tuition_category_aid = $_GET['tuitioncategoryid'];
    $tuitionCategory->tuition_category_name = checkIndex($data, "tuition_category_name");
    $tuitionCategory->tuition_category_datetime = date("Y-m-d H:i:s");
    checkId($tuitionCategory->tuition_category_aid);
    $tuition_category_name_old = checkIndex($data, "tuition_category_name_old");
    compareName($tuitionCategory, $tuition_category_name_old, $tuitionCategory->tuition_category_name);
    $query = checkUpdate($tuitionCategory);
    returnSuccess($tuitionCategory, "Tuition Category", $query);
}

checkEndpoint();
