<?php
	header("Access-Control-Allow-Origin: *");
	$data = array(
		'id' => 543341,
		'name' => 'Sakchai Kantada',
		'age' => 30,
		'email' => 'sakchaiwebmaster@gmail.com',
		'tal' => '0832092143'
	);

	echo json_encode($data);
?>