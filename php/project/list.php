<?php
require("../db/db.php");
// $sql = "SELECT * FROM project";
// $data = array();
// if ($resultdb = $mysqli->query($sql)) {
//     while($profile = $resultdb->fetch_assoc()) {
//         $data[] = $profile;
//     }
// }
$sql = "SELECT * FROM project";


$result = array();

if ($resultdb = $mysqli->query($sql)) {

    while($profile = $resultdb->fetch_assoc()) {
        $result[] = $profile;
    }

    $resultdb->close();
}

echo json_encode(array(
    "success" => $mysqli->connect_errno == 0,
    "data" => $result
));

/* close connection */
$mysqli->close();

?>