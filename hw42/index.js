const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    if (req.method === 'GET') {
        let filePath = '.' + req.url;

        if (filePath === './') {
            filePath = './home.html';
        }

        const fullPath = path.resolve(__dirname, 'public', filePath);

        fs.readFile(fullPath, (err, data) => {
            if (err) {

                console.error(`Помилка читання файлу: ${err}`);
                res.statusCode = 500;
                res.end('Помилка сервера');
            } else {
                res.end(data);
            }
        });
    } else {
        res.statusCode = 405; 
        res.end('Метод не дозволений');
    }
});

server.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`);
});
