<?php
$conn = null;
$conn = checkDbConnection();
$learningType = new LearningType($conn);
if (array_key_exists("learningtypeid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$learningType->learning_type_name = checkIndex($data, "learning_type_name");
$learningType->learning_type_active = 1;
$learningType->learning_type_created = date("Y-m-d H:i:s");
$learningType->learning_type_datetime = date("Y-m-d H:i:s");

isNameExist($learningType, $learningType->learning_type_name);

$query = checkCreate($learningType);
returnSuccess($learningType, "Learning Type", $query);
