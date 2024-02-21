<?php

function isBiologicalParentExist($object, $name)
{
    $query = $object->checkBiologicalParent();
    $count = $query->rowCount();
    checkExistence($count, "Set only one biological mother or father");
}