<?php
$conn = null;
$conn = checkDbConnection();
$grade_level = new GradeLevel($conn);
$error = [];
$returnData = [];
if (array_key_exists("gradelevelid", $_GET)) {
    $grade_level->grade_level_aid = $_GET['gradelevelid'];
    checkId($grade_level->grade_level_aid);

    isAssociated($grade_level);
    $query = checkDelete($grade_level);
    returnSuccess($grade_level, "Grade Level", $query);
}

checkEndpoint();
