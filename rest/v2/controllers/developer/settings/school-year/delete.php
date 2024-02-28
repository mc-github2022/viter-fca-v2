<?php
$conn = null;
$conn = checkDbConnection();
$sy = new SchoolYear($conn);

// only if key exist
if (array_key_exists("syid", $_GET)) {
    $sy->school_year_aid = $_GET['syid'];

    // validate id if empty or valid number
    checkId($sy->school_year_aid);

    isAssociated($sy);

    // delete
    $query = checkDelete($sy);

    // return success
    returnSuccess($sy, "Staff", $query);
}

checkEndpoint();
