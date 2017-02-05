<?php
	header("Access-Control-Allow-Origin: *");
	$data = array(
		[
		'id' => '1234',
		'name' => 'Sakchai Kantada',
		'age' => '30',
		'email' => 'sakchaiwebmaster@gmail.com',
		'tel' => '0832092143',
		'price' => '2500',
		'date' => '1986-05-31'
		]
	);

	echo json_encode($data);
?>