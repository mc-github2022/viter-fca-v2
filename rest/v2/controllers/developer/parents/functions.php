<?php

// update if no account 
function checkUpdateIfNoAccount($object)
{
    $query = $object->updateIfNoAccount();
    checkQuery($query, "There's a problem processing your request. (update if no account)");
    return $query;
}

function checkUpdateFinancier($object)
{
    $query = $object->updateFinancier();
    checkQuery($query, "There's a problem processing your request. (update if no account)");
    return $query;
}


function checkReadStudentByParentId($object)
{
    $query = $object->readStudentById();
    checkQuery($query, "There's a problem processing your request. (Read by student id)");
    return $query;
}

// delete from guardian
function checkDeleteGuardian($object)
{
    $query = $object->deleteGuardian();
    checkQuery($query, "There's a problem processing your request. (delete from guardian)");
    return $query;
}
