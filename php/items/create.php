<?php

require("../db/db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = $_POST['data'];

$data = json_decode(stripslashes($data));


$query = "";
foreach ($data as $value){
        $item_name = $value->items_name ? $value->items_name : "Undefined";
        $uom = $value->UoM ? $value->UoM : "Undefined";
        $price = $value->price? $value->price : "0";
        $brand = $value->brand ? $value->brand : "Undefined";
        $tax = ($value->tax == 10) ? $value->tax : "0";
        $model = $value->model ? $value->model : "Undefined";
        $make = $value->make ? $value->make : "Undefined";
        $image = $value->image ? $value->image : "Undefined.jpg";
        $description = $value->description ? $value->description : "Undefined";
        $catagory_fkid = $value->category_fkid ? $value->category_fkid : '1';
        $last_update =$value->last_update;
        $query = "INSERT INTO items (items_name, UoM, price, brand, tax, model, make, image, description, category_fkid, last_update)  values ('$item_name', '$uom', '$price','$brand', '$tax', '$model','$model','$image', '$description', '$catagory_fkid','$last_update')";

}
if ($resultDb = $mysqli->query($query)) {
    $id = $mysqli->insert_id;
    $data->items_id = $id;
}
echo json_encode(array(
   "success" => $mysqli->error == '',
    "data" => $data
));

/* close connection */
$mysqli->close();
?>