import { Router } from "express";
import {pool} from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
    const data = await pool.query('SELECT * FROM employees');
    res.json(data[0]);
})

router.post('/', (req, res) => {
    res.send('Creando empleado');
})

router.put('/', (req, res) => {
    res.send('Actualizando empleado');
})

router.delete('/', (req, res) => {
    res.send('Borrando empleado');
})

export default router;