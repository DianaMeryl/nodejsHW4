const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'homepage', 'home.html'), (err, data) => {
            if (err) {
                console.error(`Помилка читання файлу: ${err}`);
                res.statusCode = 500;
                res.end('Помилка сервера');
            } else {
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Страницю не знайдено');
    }
});

server.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`);
});
