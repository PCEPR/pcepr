<?php 
$server = "127.0.0.1";
$user = "root";
$pass = "";
$dbName = "pceprsystem";

$mysqli = new mysqli($server, $user, $pass, $dbName);

if ($mysqli->connect_errno) {
    die('Connect Error: ' . $mysqli->connect_errno);
}

?>