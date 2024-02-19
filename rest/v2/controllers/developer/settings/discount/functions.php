<?php

// Read all
function checkReadAllCategory($object)
{
    $query = $object->readAllCategory();
    checkQuery($query, "Empty records. (read all category)");
    return $query;
}
