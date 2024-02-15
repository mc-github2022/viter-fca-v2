<?php

// Read by maintenance
function checkReadByMaintenanceOn($object)
{
    $query = $object->readByMaintenanceOn();
    checkQuery($query, "Empty records. (read by maintenance)");
    return $query;
}
