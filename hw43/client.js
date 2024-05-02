const http = require('http');

const data = JSON.stringify({ message: 'Це дані для POST запиту' });

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log(responseData);
    });
});

req.on('error', (error) => {
    console.error('Помилка запиту:', error);
});

req.write(data);
req.end();