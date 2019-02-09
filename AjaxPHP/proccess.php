<?php

// connect to database
$conn = mysqli_connect('localhost', 'jackiegut19', '', 'ajaxtest', 3306);

echo 'processing...';

if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    echo 'POST: Your name is '.$_POST['name'];
    
    $query = "INSERT INTO users(name) VALUE('$name')";
    
    if(mysqli_query($conn, $query)){
        echo 'User Added...';
    } else {
        echo 'ERROR: ' . mysqli_error($conn);
    }
}

// check for GET variable
if(isset($_GET['name'])){
    echo 'GET: Your name is '.$_GET['name'];
}
