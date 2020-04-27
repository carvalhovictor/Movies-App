<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
	
    require_once "db_connect.php";

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$username = $request->username;
	$password = $request->password;


	$query = "INSERT INTO USERS (EMAIL, PASSWORD) VALUES ('$username', '$password')";

    $db->query($query);

 ?>	
