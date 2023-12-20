<?php 

function isTuitionFeeExist($object)
{
    $query = $object->checkTuitionFee();
    checkQuery($query, "Tuition fee already exist");
    return $query;
}