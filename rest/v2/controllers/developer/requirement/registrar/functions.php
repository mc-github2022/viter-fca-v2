<?php
function checkReadByStudentId($object)
{
    $query = $object->readByStudentID();
    checkQuery($query, "Empty records. (by id)");
    return $query;
}