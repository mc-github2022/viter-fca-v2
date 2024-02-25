<?php

// create school year student
function checkCreateSchoolYearStudent($object)
{
    $query = $object->createSchoolYearStudent();
    checkQuery($query, "There's a problem processing your request. (create school year student)");
    return $query;
}

// update school year student
function checkUpdateSchoolYearStudent($object)
{
    $query = $object->updateSchoolYearStudent();
    checkQuery($query, "There's a problem processing your request. (update school year student)");
    return $query;
}
