<?php

use \Firebase\JWT\JWT;

// Read all
function checkReadAllOther($object)
{
    $query = $object->readAllOther();
    checkQuery($query, "Empty records.");
    return $query;
}

// Read limit
function checkReadLimitOther($object)
{
    $query = $object->readLimitOther();
    checkQuery($query, "Empty records. (limit)");
    return $query;
}

// Read search
function checkSearchOther($object)
{
    $query = $object->searchOther();
    checkQuery($query, "Empty records. (search other)");
    return $query;
}

// staff
function checkReadStaff($object)
{
    $query = $object->readStaff();
    checkQuery($query, "Empty records. (staff)");
    return $query;
}

// parents
function checkReadParents($object)
{
    $query = $object->readParents();
    checkQuery($query, "Empty records. (parents)");
    return $query;
}

// update parents email 
function checkUpdateEmailForParents($object)
{
    $query = $object->updateEmailForParents();
    checkQuery($query, "There's a problem processing your request. (update parents email)");
    return $query;
}

// Admin Login
function checkAdminLogin($object)
{
    $response = new Response();
    $query = $object->readAdminLogin();
    if ($query->rowCount() == 0) {
        $response->setSuccess(false);
        $error["count"] = 0;
        $error["success"] = false;
        $error['error'] = "Invalid account. Please use a registered one.";
        $response->setData($error);
        $response->send();
        exit;
    }
    return $query;
}

// Token for other user
function tokenOther(
    $object,
    $token,
    $key
) {
    $response = new Response();
    $error = [];
    $returnData = [];

    if (!empty($token)) {
        try {
            $decoded = JWT::decode($token, $key, array('HS256'));
            $object->user_other_email = $decoded->data->email;


            $adminLoginData = getResultData($object->readAdminLogin());

            if (count($adminLoginData) > 0) {
                $result = checkAdminLogin($object);
            } else {
                $result = checkLogin($object);
            }

            $row = $result->fetch(PDO::FETCH_ASSOC);

            http_response_code(200);
            $returnData["data"] = $row;
            $returnData["count"] = $result->rowCount();
            $returnData["success"] = true;
            $returnData["message"] = "Access granted.";
            $response->setData($returnData);
            $response->send();
            return $returnData;
        } catch (Exception $ex) {
            $response->setSuccess(false);
            $error["count"] = 0;
            $error["success"] = false;
            $error['error'] = "Catch no token found.";
            $response->setData($error);
            $response->send();
            exit;
        }
    } else {
        $response->setSuccess(false);
        $error["count"] = 0;
        $error["success"] = false;
        $error['error'] = "No token found.";
        $response->setData($error);
        $response->send();
        exit;
    }

    checkEndpoint();
    http_response_code(200);
    checkAccess();
}
