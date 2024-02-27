<?php

function checkCreateStudentSchoolYearByParent($object)
{
    $query = $object->createStudentSchoolYearByParent();
    checkQuery($query, "There's a problem processing your request. (Create student school year by parent )");
    return $query;
}

function checkUpdateStudentSchoolYearByParent($object)
{
    $query = $object->updateStudentSchoolYearByParent();
    checkQuery($query, "There's a problem processing your request. (Update student school year by parent )");
    return $query;
}

// check lrn if already exist
function isLrnExist($object, $lrn)
{
    $query = $object->checkLrn();
    $count = $query->rowCount();
    checkExistence($count, "This LRN {$lrn} already exist.");
}
