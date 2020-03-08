<?php

require("../db/db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = $_POST['data'];

$data = json_decode(stripslashes($data));
$item_id = 0;
foreach ($data as $value){
    $item_id =  $value->items_id;
}

$query = "Delete FROM items where items_id = $item_id";
$resultdb = $mysqli->query($query);

echo json_encode(array(
    "success" => $mysqli->connect_errno == 0,
    "msg" => $mysqli->error
));

$mysqli->close();
?>