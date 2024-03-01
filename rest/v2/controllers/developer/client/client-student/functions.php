<?php

function checkCreateStudentSchoolYearByParent($object)
{
    $query = $object->createStudentSchoolYearByParent();
    checkQuery($query, "There's a problem processing your request. (Create student school year by parent )");
    return $query;
}

function checkCreateStudentSchoolYearByParentCurrent($object)
{
    $query = $object->createStudentSchoolYearByParentCurrent();
    checkQuery($query, "There's a problem processing your request. (Create student school year by parent current)");
    return $query;
}

function checkEnrollStudent($object)
{
    $query = $object->enrollStudent();
    checkQuery($query, "There's a problem processing your request. (enroll student)");
    return $query;
}

function checkUpdateSchoolYearStudentCurrent($object)
{
    $query = $object->updateSchoolYearStudentCurrent();
    checkQuery($query, "There's a problem processing your request. (update school year student student)");
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

// compare lrn
function compareLrn($object, $lrn_old, $lrn)
{
    if (strtolower($lrn_old) != strtolower($lrn)) {
        isLrnExist($object, $lrn);
    }
}

// update school year student
function checkUpdateSchoolYearStudent($object)
{
    $query = $object->updateSchoolYearStudent();
    checkQuery($query, "There's a problem processing your request. (update school year student)");
    return $query;
}

// check if enrolled
function isStudentExist($object, $name)
{
    $query = $object->checkStudent();
    $count = $query->rowCount();
    checkExistence($count, "{$name} is already enrolled.");
}
