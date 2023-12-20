<?php
$conn = null;
$conn = checkDbConnection();
$tuitionCategory = new TuitionCategory($conn);
$error = [];
$returnData = [];
if (array_key_exists("tuitioncategoryid", $_GET)) {
    $tuitionCategory->tuition_category_aid = $_GET['tuitioncategoryid'];
    checkId($tuitionCategory->tuition_category_aid);

    isAssociated($tuitionCategory);
    $query = checkDelete($tuitionCategory);
    returnSuccess($tuitionCategory, "Tuition Category", $query);
}

checkEndpoint();
