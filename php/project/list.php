<?php
require("../db/db.php");
// $sql = "SELECT * FROM project";
// $data = array();
// if ($resultdb = $mysqli->query($sql)) {
//     while($profile = $resultdb->fetch_assoc()) {
//         $data[] = $profile;
//     }
// }
if ($_GET['node'] == 'root'){
    $parent_id = 0;
} else {
    $parent_id = $_GET['node'];
}
$query = "SELECT * FROM mytree WHERE parent_id='".$parent_id."' ORDER BY text ASC";

$rs = $mysqli->query($query);
$arr = array();

while($boj = $rs->fetch_assoc()){
    $arr[] = $boj;
}

echo json_encode( $arr);
// $mysqli->close();

?>