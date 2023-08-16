import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    const data = await pool.query('SELECT * FROM employees');
    res.json(data[0]);
}

export const postEmployees = (req, res) => {
    res.send('Creando empleado');
}

export const putEmployees = (req, res) => {
    res.send('Actualizando empleado');
}

export const deleteEmployees = (req, res) => {
    res.send('Borrando empleado');
}