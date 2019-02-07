<?php
echo 'processing...';

// check for POST variable
if(isset($_POST['name'])){
    echo 'POST: Your name is '.$_POST['name'];
} // its redirecting to the actual php page and its output a new post name

// check for GET variable
if(isset($_GET['name'])){
    echo 'GET: Your name is '.$_GET['name'];
}

// NOTE: this is pretty unsafe but this is just to show how it works