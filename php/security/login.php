<?php
require("../db/db.php");
require("PassHash.php");
session_start();

$userName = $_POST['user'];
$pass = $_POST['password'];

$userName = stripslashes($userName);
$pass = stripslashes($pass);

$userName = $mysqli->real_escape_string($userName);
$sql = "SELECT * FROM user WHERE userName= '$userName'";

if($resultDb = $mysqli->query($sql)){
    $count = $resultDb->num_rows;
    if($count == 1){
        $record = $resultDb->fetch_assoc();
        if(Passhash::compare( $pass,$record['password'])){
            $_SESSION['authenticated'] = "yes";
            $_SESSION['username'] = $userName;
            $result['success'] = true;
            $result['msg'] = 'user authenticated!';
        }else{
            $result['success'] = false;
            $result['msg'] = 'Incorrect password';
        }
    }else{
        $result['success'] = false;
        $result['msg'] = 'Incorrect user or password';
    }
    $resultDb->close();
}
$mysqli->close();
echo json_encode($result);
?>