const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.end('<h1>Привіт, Вітаю на моєму веб-сервері!</h1>');

    console.log('Запит отримано!');
});

server.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`);
});
