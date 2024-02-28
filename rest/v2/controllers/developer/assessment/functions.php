<?php


// Group by Tuition Fee Grade
function checkReadAllByGroupTuitionFeeGrade($object)
{
    $query = $object->readAllByGroupTuitionFeeGrade();
    checkQuery($query, "Empty records. (read all by group tuition fee grade)");
    return $query;
}

// Read all Tuition Fee Scheme by category and grade
function checkReadByCategoryAndGrade($object)
{
    $query = $object->readByCategoryAndGrade();
    checkQuery($query, "Empty records. (read all tuition fee scheme by category and grade)");
    return $query;
}

// Read all Tuition Fee Scheme by category and grade
function checkReadAllPrimaryDiscount($object)
{
    $query = $object->readAllPrimaryDiscount();
    checkQuery($query, "Empty records. (read all primary discount)");
    return $query;
}

// Read all Tuition Fee Scheme by category and grade
function checkReadAllAdditionalDiscount($object)
{
    $query = $object->readAllAdditionalDiscount();
    checkQuery($query, "Empty records. (read all addittional discount)");
    return $query;
}

// Update 
function checkUpdateAcceptPayment($object)
{
    $query = $object->updateAcceptPayment();
    checkQuery($query, "There's a problem processing your request. (update accept payment)");
    return $query;
}
