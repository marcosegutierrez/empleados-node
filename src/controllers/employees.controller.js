import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    const data = await pool.query('SELECT * FROM employees');
    res.json(data[0]);
}

export const postEmployees = async (req, res) => {
    const { name, salary } = req.body;
    const [data] = await pool.query('INSERT INTO employees(name, salary) VALUES (?,?)', [name, salary]);
    res.send({
        id: data.insertId,
        name,
        salary,
    });
}

export const putEmployees = (req, res) => {
    res.send('Actualizando empleado');
}

export const deleteEmployees = (req, res) => {
    res.send('Borrando empleado');
}