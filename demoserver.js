var http =  require ('http');
http.createServer(function(request, response) {
    // your server code
    res.write("Hello World! Welcome to this page");
    res.end();
    }).listen(process.env.PORT || 3000);