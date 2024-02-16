<?php
$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);

// only if key exist
if (array_key_exists("parentsid", $_GET)) {
    $parents->parents_aid = $_GET['parentsid'];

    // validate id if empty or valid number
    checkId($parents->parents_aid);

    // delete
    $query = checkDelete($parents);

    // return success
    returnSuccess($parents, "Parents", $query);
}

checkEndpoint();
