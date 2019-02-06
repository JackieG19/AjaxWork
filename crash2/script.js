document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);
    
function loadUser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
        
    xhr.onload = function(){
        if(this.status == 200){
            // // wrap this up in a fucntion called JSON.parse to access the values in the user.json file 
            var user = JSON.parse(this.responseText); 
            // 1. Fetched data fron the json file asynchronously
            
            //console.log(user.name); //this will print out the name inside the json object 
            
            // 2. built a template string    
            var output = ''; // initialize with an empty value
            // then append on to it 
            output += '<ul>' +
            '<li>ID: '+user.id+'</li>' +
            '<li>Name: '+user.name+'</li>' +
            '<li>Email: '+user.email+'</li>' +
            '</ul>'; 
            
            // 3. output it into the browser without having to reload the page
            document.getElementById('user').innerHTML = output;
        }
    };
        xhr.send();
    }
    
    
function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
        
    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            var output = '';
                
            // To fetch the json array similar to the json object, need a loop
            // to go through then append the output and append the url to each user
            for(var i in users){
                output += '<ul>' +
                '<li>ID: '+users[i].id+'</li>' +
                '<li>Name: '+users[i].name+'</li>' +
                '<li>Email: '+users[i].email+'</li>' +
                '</ul>';
            }
            document.getElementById('users').innerHTML = output;
        }
    };
        xhr.send();
}
