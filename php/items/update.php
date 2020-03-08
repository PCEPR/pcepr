<?php

require("../db/db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = $_POST['data'];

$data = json_decode(stripslashes($data));
$query = 0;
foreach ($data as $value){
    // $items_id = $value->items_id;
    // $items_name = $value->items_name;
    // $items_price = $value->price;
    $query = sprintf("update items set items_name = '%s', UoM = '%s', price= '%s', brand= '%s', tax= '%s', model= '%s', make= '%s', image= '%s', description= '%s', category_fkid= '%s', last_update= '%s' WHERE items_id = '%s'",
        $mysqli->real_escape_string($value->items_name),
        $mysqli->real_escape_string($value->UoM),
        $mysqli->real_escape_string($value->price),
        $mysqli->real_escape_string($value->brand),
        $mysqli->real_escape_string($value->tax),
        $mysqli->real_escape_string($value->model),
        $mysqli->real_escape_string($value->make),
        $mysqli->real_escape_string($value->image),
        $mysqli->real_escape_string($value->description),
        $mysqli->real_escape_string($value->category_fkid),
        $mysqli->real_escape_string($value->last_update),
        $mysqli->real_escape_string($value->items_id));
}

$resultDb = $mysqli->query($query);

echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => $data
));

/* close connection */
$mysqli->close();
?>