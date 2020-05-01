<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
	
    require_once "db_connect.php";

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
    
	$email = $request->email;
	$password = $request->password;
    $returnValue;

    $query="SELECT EMAIL, PASSWORD FROM USERS WHERE EMAIL='$email' AND PASSWORD='$password'";

    $result = $db->query($query);
    
 	if ($result->num_rows == 0){
		$returnValue = 'Invalid email/password';
	}else{
        session_start();
        $_SESSION['user'] = $email;
		$returnValue = 1;
	}

    echo $returnValue;
    $db->close();
 ?>	
