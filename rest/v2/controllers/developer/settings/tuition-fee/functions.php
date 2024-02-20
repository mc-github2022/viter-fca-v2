<?php

function isTuitionFeeExist($object)
{
    $query = $object->checkTuitionFee();
    checkQuery($query, "Tuition fee already exist");
    return $query;
}

// Read all category
function checkReadAllCategory($object)
{
    $query = $object->readAllCategory();
    checkQuery($query, "Empty records. (read All category)");
    return $query;
}

// Read all Scheme
function checkReadAllScheme($object)
{
    $query = $object->readAllScheme();
    checkQuery($query, "Empty records. (read All Scheme)");
    return $query;
}

// Read all Scheme
function checkReadByCategoryAndGrade($object)
{
    $query = $object->readByCategoryAndGrade();
    checkQuery($query, "Empty records. (read All Scheme)");
    return $query;
}

// Read all Grade
function checkReadAllGrade($object)
{
    $query = $object->readAllGrade();
    checkQuery($query, "Empty records. (read All grade)");
    return $query;
}

// Read all category
function checkReadAllGroupBYCategoryGrade($object)
{
    $query = $object->readAllGroupBYCategoryGrade();
    checkQuery($query, "Empty records. (group by category and grade)");
    return $query;
}
