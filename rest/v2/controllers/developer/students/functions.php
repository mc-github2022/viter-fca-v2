<?php

// create school year student
function checkCreateSchoolYearStudent($object)
{
    $query = $object->createSchoolYearStudent();
    checkQuery($query, "There's a problem processing your request. (create school year student)");
    return $query;
}
