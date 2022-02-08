import express from 'express';
import expressWs from 'express-ws';

const app = express();
const port = 3030;

let userList = [];

if (!server) {
    var server = app.listen(port, () => {
        console.log(`app running on port ${port}`)
    })
}

const eWS = expressWs(app, server);
const wss = eWS.getWss();

app.use( (req, res, next) => {
    if (req.ws){
        console.log("middleware for ws",);
    }

    req.testing = 'testing'; 
    return next();
})

app.get('/', (req, res) => {
    console.log('get route', req.testing);
    res.json({data: chat});
})

// pretty sure this on connection thing doesn't work as intended!

app.ws('/ws/:user?', (ws, req) => {
    const user = req.params.user.slice(1);
    if (user){
        if (!(userList.includes(user))){
            userList.push(user)
            wss.clients.forEach(client => {
                client.send(JSON.stringify({msg: `${user} Joined` }));
            })
        }

        ws.on('close', () => {
            if (userList.includes(user)){
                userList.splice(userList.indexOf(user), 1);
                wss.clients.forEach(client => {
                    client.send(JSON.stringify({msg: `${user} has left the chat`, userToRemove: user}));
                })
            }
        });

        ws.on('message', (data) => {
            wss.clients.forEach(client => {
                if (client.readyState === ws.OPEN){
                    if (data){
                        client.send(data);
                    }
                }
            })
        });
    }
});
