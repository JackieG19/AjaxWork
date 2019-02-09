<?php

// create connection
$conn = mysqli_connect('localhost', 'jackiegut19', '', 'ajaxtest', 3306);

$query = 'SELECT * FROM users';

// Get Result
$result = mysqli_query($conn, $query);

// fetch data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);