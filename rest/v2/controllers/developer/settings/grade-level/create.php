<?php
$conn = null;
$conn = checkDbConnection();
$grade_level = new GradeLevel($conn);
if (array_key_exists("gradelevelid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$grade_level->grade_level_name = checkIndex($data, "grade_level_name");
$grade_level->grade_level_order = checkIndex($data, "grade_level_order");
$grade_level->grade_level_is_pre_school = checkIndex($data, "grade_level_is_pre_school");
$grade_level->grade_level_is_base_two = checkIndex($data, "grade_level_is_base_two");
$grade_level->grade_level_active = 1;
$grade_level->grade_level_created = date("Y-m-d H:i:s");
$grade_level->grade_level_datetime = date("Y-m-d H:i:s");

isNameExist($grade_level, "$grade_level->grade_level_name or Order $grade_level->grade_level_order");

$query = checkCreate($grade_level);
returnSuccess($grade_level, "Grade Level", $query);
