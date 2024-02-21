<?php

function isBiologicalParentExist($object, $name)
{
    $query = $object->checkBiologicalParent();
    $count = $query->rowCount();
    checkExistence($count, "Set only one biological mother or father");
}


function compareRelationship($object, $name_old, $name)
{
    if (strtolower($name_old) !=  strtolower($name)) {
        isBiologicalParentExist($object, $name);
    }
}