<?php
echo 'processing...';

// check for GET variable

// if(is set(super global[search a variable called name]))
if(isset($_GET['name'])){
    
    // if it exist
    echo 'GET: Your name is '.$_GET['name'];
}

// NOTE: this is pretty unsafe but this is just to show how it works