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

// delete school year student
function checkDeleteSchoolYearStudents($object)
{
    $query = $object->deleteSchoolYearStudents();
    checkQuery($query, "There's a problem processing your request. (delete school year student)");
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

// update school year student Code of Conduct
function checkUpdateSchoolYearStudentCoc($object)
{
    $query = $object->updateSchoolYearStudentCoc();
    checkQuery($query, "There's a problem processing your request. (update school year student Code of Conduct)");
    return $query;
}

// update school year student Parent Declaration
function checkUpdateSchoolYearStudentParentDeclare($object)
{
    $query = $object->updateSchoolYearStudentParentDeclare();
    checkQuery($query, "There's a problem processing your request. (update school year student Parent Declaration)");
    return $query;
}

// update school year student Parent Consent
function checkUpdateSchoolYearStudentParentConsent($object)
{
    $query = $object->updateSchoolYearStudentParentConsent();
    checkQuery($query, "There's a problem processing your request. (update school year student Parent Consent)");
    return $query;
}

// update school year student Commitment Form
function checkUpdateSchoolYearStudentCommitmentForm($object)
{
    $query = $object->updateSchoolYearStudentCommitmentForm();
    checkQuery($query, "There's a problem processing your request. (update school year student Commitment Form)");
    return $query;
}
