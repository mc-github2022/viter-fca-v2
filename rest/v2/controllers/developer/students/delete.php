<?php
$conn = null;
$conn = checkDbConnection();
$student = new StudentInfo($conn);

$error = [];
$returnData = [];
if (array_key_exists("studentid", $_GET)) {
    $student->student_info_aid   = $_GET['studentid'];
    checkId($student->student_info_aid);

    // isAssociatedNotification($student);
    // isAssociatedRequirementFinance($student);
    // isAssociatedRequirementRegistrar($student);
    // isAssociatedRequirementIT($student);

    $query = checkDelete($student);
    returnSuccess($student, "student", $query);
}

checkEndpoint();
