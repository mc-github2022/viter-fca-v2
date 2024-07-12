<?php
$conn = null;
$conn = checkDbConnection();
$grade_level = new GradeLevel($conn);
$error = [];
$returnData = [];
if (array_key_exists("gradelevelid", $_GET)) {
    checkPayload($data);
    $grade_level->grade_level_aid = $_GET['gradelevelid'];
    $grade_level->grade_level_name = checkIndex($data, "grade_level_name");
    $grade_level->grade_level_order = checkIndex($data, "grade_level_order");
    $grade_level->grade_level_is_pre_school = checkIndex($data, "grade_level_is_pre_school");
    $grade_level->grade_level_is_base_two = checkIndex($data, "grade_level_is_base_two");
    $grade_level->grade_level_datetime = date("Y-m-d H:i:s");
    checkId($grade_level->grade_level_aid);
    $grade_level_name_old = checkIndex($data, "grade_level_name_old");
    compareName($grade_level, $grade_level_name_old, $grade_level->grade_level_name);
    $query = checkUpdate($grade_level);
    returnSuccess($grade_level, "Grade Level", $query);
}

checkEndpoint();
