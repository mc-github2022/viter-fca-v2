<?php
$conn = null;
$conn = checkDbConnection();
$learningType = new LearningType($conn);
$error = [];
$returnData = [];
if (array_key_exists("learningtypeid", $_GET)) {
    $learningType->learning_type_aid = $_GET['learningtypeid'];
    checkId($learningType->learning_type_aid);

    //isAssociated($learningType);
    $query = checkDelete($learningType);
    returnSuccess($learningType, "Learning Type", $query);
}

checkEndpoint();
