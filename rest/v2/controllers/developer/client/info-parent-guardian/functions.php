<?php

function checkUpdateRelationship($object) {
    $query = $object->updateRelationship();
    checkQuery($query, "There's a problem processing your request. (update relationship)");
    return $query;
}


function checkUpdateContact($object) {
    $query = $object->updateContact();
    checkQuery($query, "There's a problem processing your request. (update relationship)");
    return $query;
}