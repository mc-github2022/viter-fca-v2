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
function checkUpdateNotifyOrAcceptPayment($object)
{
    $query = $object->updateNotifyOrAcceptPayment();
    checkQuery($query, "There's a problem processing your request. (update notify or accept payment)");
    return $query;
}

// Update 
function checkUpdateCurrentNotifyOrAcceptPayment($object)
{
    $query = $object->updateCurrentNotifyOrAcceptPayment();
    checkQuery($query, "There's a problem processing your request. (update current student table notify or accept payment)");
    return $query;
}
