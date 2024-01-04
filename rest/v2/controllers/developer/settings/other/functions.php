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

// read active member by branch
function checkReadActiveMember($object)
{
    $query = $object->readMemberByBranchId();
    checkQuery($query, "Empty records. (member by branch)");
    return $query;
}

// read active collector by branch
function checkReadActiveCollector($object)
{
    $query = $object->readCollectorByBranchId();
    checkQuery($query, "Empty records. (collector by branch)");
    return $query;
}

// read active cashier by branch
function checkReadActiveCashier($object)
{
    $query = $object->readCashierByBranchId();
    checkQuery($query, "Empty records. (cashier by branch)");
    return $query;
}

// read active agent / coordinator by branch
function checkReadActiveAgentCoordinator($object)
{
    $query = $object->readAgentCoordinatorByBranchId();
    checkQuery($query, "Empty records. (agent / coordinator by branch)");
    return $query;
}
