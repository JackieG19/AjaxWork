document.getElementById("button").addEventListener('click', loadText);
// create an event listener to catch the click of the button

function loadText(){
//console.log('button clicked'); it works
       
// creating the XHR object
    var xhr = new XMLHttpRequest(); 
    // use the OPEN function that takes in 3 parameter: 
    // 1. type of request, 2. url or filename, 3. if asynchronous (true) or not(false)
    xhr.open('GET', 'sample.txt', true);
    
    // 1. server connection established
    console.log('READYSTATE:', xhr.readyState); 
        
    // optional - used for loading up a page
    xhr.onprogress = function(){
      console.log('READYSTATE:', xhr.readyState);
       // 3. this is processing the request
    };
        
    xhr.onload = function(){ 
        // 4. request is finished and response is ready
        console.log('READYSTATE:', xhr.readyState);  
       
            // check for the status of the response
        if(this.status == 200){ // if the status of rhe xhr equals ok
            document.getElementById('text').innerHTML = this.responseText;
            // asynchronously loads the text of the smiple.txt file on to the html page
         }
         else if(this.status == 404){
            document.getElementById('text').innerHTML = 'Not Found';
         }
   };
   // you want to have this handler in case something goes wrong
   xhr.onerror = function(){
     console.log('Request Error...');  
   };
   
        xhr.send(); // send request 
}