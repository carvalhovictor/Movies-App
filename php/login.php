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

    $query="SELECT EMAIL, PASSWORD FROM USERS WHERE EMAIL='$username' AND PASSWORD='$password'";

    $result = $db->query($query);

 	if ($result->num_rows == 0){
		echo 'Invalid username/password';
	}else{
		echo 1;
	}
    $db->close();
 ?>	
