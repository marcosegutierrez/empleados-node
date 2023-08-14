import express from "express";
const app = express();
import 'dotenv/config';
import {pool} from './db.js';

const PORT = process.env.PORT

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT} -> http://localhost:${PORT}`);
});