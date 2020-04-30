<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
	
    require_once "db_connect.php";

    $postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
    $user = $request->user;




    $result = $db->query("SELECT ID FROM USERS WHERE EMAIL = '$user'");

    while ( $row = $result->fetch_assoc())  {
        $id = $row['ID'];
    }


	$movielist = $db->query("SELECT ID as id, MOVIETITLE as title FROM FAVORITES WHERE USERID = '$id'");

	//Initialize array variable
	$dbdata = array();

	//Fetch into associative array
	while ( $row = $movielist->fetch_assoc())  {
		$dbdata[]=$row;
	}

	//Print array in JSON format
	echo json_encode($dbdata);

    $db->close();
 ?>	
