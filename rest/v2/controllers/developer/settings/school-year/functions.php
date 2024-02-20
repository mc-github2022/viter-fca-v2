<?php

// update enrollment date 
function checkUpdateEnrollmentDate($object)
{
    $query = $object->updateEnrollmentDate();
    checkQuery($query, "There's a problem processing your request. (update enrollment date)");
    return $query;
}
