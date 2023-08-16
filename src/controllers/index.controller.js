import { pool } from '../db.js';

export const getPing = (req, res) => {
    res.send('pong');
}