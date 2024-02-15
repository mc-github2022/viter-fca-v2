<?php

// Read all
function checkReadAllOther($object)
{
    $query = $object->readAllOther();
    checkQuery($query, "Empty records.");
    return $query;
}

// Read limit
function checkReadLimitOther($object)
{
    $query = $object->readLimitOther();
    checkQuery($query, "Empty records. (limit)");
    return $query;
}

// Read search
function checkSearchOther($object)
{
    $query = $object->searchOther();
    checkQuery($query, "Empty records. (search other)");
    return $query;
}

// staff
function checkReadStaff($object)
{
    $query = $object->readStaff();
    checkQuery($query, "Empty records. (staff)");
    return $query;
}
