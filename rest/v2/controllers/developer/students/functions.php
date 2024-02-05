<?php

function isAssociatedNotification($object)
{
    $query = $object->checkAssociationNotification();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module. (Notification)");
}


function isAssociatedRequirementFinance($object)
{
    $query = $object->checkAssociationRequirementFinance();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module. (Requirement Finance)");
}


function isAssociatedRequirementRegistrar($object)
{
    $query = $object->checkAssociationRequirementRegistrar();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module. (Requirement Registrar)");
}

function isAssociatedRequirementIT($object)
{
    $query = $object->checkAssociationRequirementIT();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module. (Requirement IT)");
}



// Create 
function checkAddressByStudentId($object)
{
    $query = $object->readAddressByStudentId();
    checkQuery($query, "There's a problem processing your request. (Read by student ID)");
    return $query;
}