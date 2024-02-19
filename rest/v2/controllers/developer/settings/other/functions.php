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

// parents
function checkReadParents($object)
{
    $query = $object->readParents();
    checkQuery($query, "Empty records. (parents)");
    return $query;
}

// update parents email 
function checkUpdateEmailForParents($object)
{
    $query = $object->updateEmailForParents();
    checkQuery($query, "There's a problem processing your request. (update parents email)");
    return $query;
}
