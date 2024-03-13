<?php
require "functions.php";

$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);

// only if key exist
if (array_key_exists("parentsid", $_GET)) {

    $parents->parents_aid = $_GET['parentsid'];
    $parents->parents_email = $data['item'];

    // validate id if empty or valid number
    checkId($parents->parents_aid);

    $studentData = getResultData($parents->readSyStudents());
    $userAccountData = getResultData($parents->readUserOtherAccount());

    if (count($studentData) > 0) {
        returnError("You cannot delete this item because it is already associated with other module.");
    }

    if (count($userAccountData) > 0) {
        returnError("You cannot delete this item because it is already associated with other module.");
    }

    checkDeleteGuardian($parents);

    // delete
    $query = checkDelete($parents);



    // return success
    returnSuccess($parents, "Parents", $query);
}

checkEndpoint();
