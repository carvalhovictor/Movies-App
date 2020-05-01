<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
    session_start();
    $logged = 0;

    if(isset($_SESSION['user'])){
    	$logged = $_SESSION['user'];
    }
    echo $logged;
?>