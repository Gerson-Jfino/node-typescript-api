import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send("<h1>Funcionando</h1>");
});
export { server };