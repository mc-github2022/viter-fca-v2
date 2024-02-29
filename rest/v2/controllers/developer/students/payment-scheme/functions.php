<?php


// Update 
function checkUpdatePaymentSchemeSaveOrRevert($object)
{
    $query = $object->updatePaymentSchemeSaveOrRevert();
    checkQuery($query, "There's a problem processing your request. (update save or revert)");
    return $query;
}
