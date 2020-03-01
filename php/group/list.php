<?php

session_start();
require('../db/db.php');

$sqlQuery = "SELECT * FROM group";

$permissions = [];

if ($resultDb = $mysqli->query($sqlQuery)) {
    while($user = $resultDb->fetch_assoc()) {
        $permissions[] =  $user;
    }
}
$mysqli->close();

echo json_encode(array( "data" => $permissions));


// return $permissions;


?>