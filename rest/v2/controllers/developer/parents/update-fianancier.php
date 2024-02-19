<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/parent/Parents.php';
require './functions.php';

$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (array_key_exists("parentsid", $_GET)) {
    checkPayload($data);
    $parents->parents_aid = $_GET['parentsid'];
    $parents->parents_father_income = $data["parents_father_income"];
    $parents->parents_mother_income = $data["parents_mother_income"];
    $parents->parents_financier_income = checkIndex($data, "parents_financier_income");
    $parents->parents_financier_name = checkIndex($data, "parents_financier_name");
    $parents->parents_financier_occupation = checkIndex($data, "parents_financier_occupation");
    $parents->parents_financier_relationship = checkIndex($data, "parents_financier_relationship");
    $parents->parents_datetime = date("Y-m-d H:i:s");

    checkId($parents->parents_aid);
    $query = checkUpdateFinancier($parents);

    returnSuccess($parents, "Parents", $query);
}

checkEndpoint();
