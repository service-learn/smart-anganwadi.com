<?php
	$email = $_POST['email'];
	$Query = $_POST['Query'];
	$member = $_POST['member'];
	$Concern = $_POST['Concern'];
	

	// Database connection
	$conn = new mysqli('localhost','root','','contactform');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into contact(email, Query, member, Concern) values(?, ?, ?, ?)");
		$stmt->bind_param("ssss", $email, $Query, $member, $Concern);
		$execval = $stmt->execute();
		echo $execval;
		echo "submitted successfully";
		$stmt->close();
		$conn->close();
	}
?>