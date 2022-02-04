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
    // console.log('middleware');
    req.testing = 'testing';
    return next();
})

app.get('/', (req, res) => {
    console.log('get route', req.testing);
    res.json({data: chat});
})


wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === ws.OPEN){
                client.send(data);
            }
            else if (client === ws && client.readyState === ws.OPEN) {
                client.send("we did it!");
            }
        })
    })
    chat.push(" Welcome to the party" );
})

app.ws('/', (ws, req) => {
    ws.on('connection', stream => {
        console.log(stream, "awoke");
    })
    ws.on('message', (msg) => {
        console.log(msg);
        chat.push(msg);
    });
    console.log('socket');
});

// const server = app.listen(port, () => {
//     console.log(`app running on port ${port}`)
// })
