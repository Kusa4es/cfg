const http = require("http");
const fs = require("fs");
  
http.createServer(function(request, response){   
   
    let filePath = request.url.substr(1);
   
    if(filePath == "") filePath ="index.html";
    fs.readFile(filePath, function(error, data){
                  
        if(error){  
            response.statusCode = 404;
            response.end("Not Found");
        }   
        else{
            response.end(data);
        }
        return;
    })
}).listen(3000, function(){
    console.log("server started on http://localhost:3000/");
});