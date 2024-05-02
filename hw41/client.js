const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {
    console.log(`Статус відповіді: ${res.statusCode}`);

    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log('Отримано відповідь:');
        console.log(responseData);
    });
});

req.on('error', (e) => {
    console.error(`Помилка запиту: ${e.message}`);
});

req.end();
