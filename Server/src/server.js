import express from 'express';
import expressWs from 'express-ws';

const app = express();
const port = 3030;

let chat = [];

const server = app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
const eWS = expressWs(app, server);
const wss = eWS.getWss();

app.use( (req, res, next) => {
    if (req.ws){
        console.log("middleware for ws", req.ip);
    }
    req.testing = 'testing';
    return next();
})

app.get('/', (req, res) => {
    console.log('get route', req.testing);
    res.json({data: chat});
})



app.ws('/', (ws, req) => {
    ws.on('connection', stream => {
        console.log(stream, "awoke");
    })
    ws.on('message', (data) => {
        const jsData = JSON.parse(data);
        console.log(jsData);
        wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN){
                if (data){
                    client.send(data);
                }
            }
        })
    });
});
