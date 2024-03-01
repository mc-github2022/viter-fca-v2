<?php


// Update 
function checkUpdatePaymentSchemeSaveOrRevert($object)
{
    $query = $object->updatePaymentSchemeSaveOrRevert();
    checkQuery($query, "There's a problem processing your request. (update save or revert)");
    return $query;
}

// Read all
function checkReadByCurrentSyStudentAid($object)
{
    $query = $object->readByCurrentSyStudentAid();
    checkQuery($query, "Empty records. (read by current sy aid)");
    return $query;
}
