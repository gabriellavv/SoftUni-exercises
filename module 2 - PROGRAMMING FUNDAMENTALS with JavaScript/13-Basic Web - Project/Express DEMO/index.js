const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1> Home Page</h1>

    <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/">User</a></li>
    </ul>
    `);
})

app.get('/about', (req, res) => {
    res.send(`
    <h1>About us</h1>

<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">User</a></li>
</ul>
`);
})

app.get('/user/:id', (req, res) => {
    let userId = req.params.id;
    console.log(req.params.id);
    res.send(`
    <h1>User ${userId}</h1>

<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">About</a></li>
</ul>
`);
})

app.listen(3000)                  // слуша за заявки от порт 3000;
console.log("Server is listening on port 3000...");