<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
	
    require_once "db_connect.php";

    $postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
    $id = $request->id;


   	$query = "DELETE FROM FAVORITES WHERE ID = '$id'";

    $db->query($query);

    $db->close();
 ?>	
