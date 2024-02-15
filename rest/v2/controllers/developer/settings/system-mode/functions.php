<?php

function checkReadByMaintenance($object)
{
    $query = $object->readByMaintenance();
    $count = $query->rowCount();
    checkExistence($count, "Read by maintenance");
}
