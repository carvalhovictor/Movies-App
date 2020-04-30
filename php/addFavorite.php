<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
	
    require_once "db_connect.php";

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
    
	$email = $request->email;
	$title = $request->title;
  
    $result = $db->query("SELECT ID FROM USERS WHERE EMAIL = '$email'");

    while ( $row = $result->fetch_assoc())  {
        $id = $row['ID'];
    }

    $query = "INSERT INTO FAVORITES (USERID, MOVIETITLE) VALUES ('$id', '$title')";
	$db->query($query);
 
    $db->close();
 ?>	
