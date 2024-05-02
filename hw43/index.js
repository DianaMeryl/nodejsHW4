const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/plain');

    if (req.method === 'GET') {
        res.statusCode = 200;
        res.end('GET запит оброблено');
    } 
    else if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            res.statusCode = 200;
            res.end(`POST запит оброблено з даними: ${body}`);
        });
    } 
    else {
        res.statusCode = 404;
        res.end('Сторінку не знайдено');
    }
});

server.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`);
});
