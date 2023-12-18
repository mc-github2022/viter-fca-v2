<?php
$conn = null;
$conn = checkDbConnection();
$learningType = new LearningType($conn);
$error = [];
$returnData = [];
if (array_key_exists("learningtypeid", $_GET)) {
    checkPayload($data);
    $learningType->learning_type_aid = $_GET['learningtypeid'];
    $learningType->learning_type_name = checkIndex($data, "learning_type_name");
    $learningType->learning_type_datetime = date("Y-m-d H:i:s");
    checkId($learningType->learning_type_aid);
    $learningType_name_old = checkIndex($data, "learning_type_name_old");
    compareName($learningType, $learningType_name_old, $learningType->learning_type_name);
    $query = checkUpdate($learningType);
    returnSuccess($learningType, "Learning Type", $query);
}

checkEndpoint();
