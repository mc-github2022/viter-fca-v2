<?php
$conn = null;
$conn = checkDbConnection();
$sy = new SchoolYear($conn);
$response = new Response();
$returnData = [];

// only if read by id
if (array_key_exists("syid", $_GET)) {
    $sy->school_year_aid = $_GET['syid'];

    // validate id if empty or valid number
    checkId($sy->school_year_aid);

    // read by id
    $query = checkReadById($sy);

    // return data
    http_response_code(200);
    getQueriedData($query);
}

// only if read all
if (empty($_GET)) {

    $dateNow = date("Y-m-d");
    $lastSchoolYearData = getResultData($sy->readLastSchoolYear());

    $isGreaterThanEndYear = $dateNow > $lastSchoolYearData[0]["school_year_end_date"];


    // read all
    $query = checkReadAll($sy);

    // return data
    http_response_code(200);

    $returnData["data"] = getResultData($query);
    $returnData["count"] = $query->rowCount();
    $returnData["success"] = true;
    $returnData["isGreaterThanEndYear"] = $isGreaterThanEndYear;
    $response->setData($returnData);
    $response->send();
    exit;

    // getQueriedData($query);
}

checkEndpoint();
