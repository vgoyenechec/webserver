const http = require('http');

http.createServer((req, resp)=>{
    // resp.writeHead(200, {'Content-Type':'application/json'});
    // resp.setHeader('Content-Disposition', 'attachment; filename=lista.csv');//le hace saber que hay un descargable
    // resp.writeHead(200, {'Content-Type':'application/csv'});
    resp.write('Hola mundo');
    resp.end();
}).listen(8080);

console.log('Escuchando el puerto ', 8080);