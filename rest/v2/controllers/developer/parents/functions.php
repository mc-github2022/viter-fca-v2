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
