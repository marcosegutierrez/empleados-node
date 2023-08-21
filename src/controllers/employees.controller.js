import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    try {
        const [data] = await pool.query('SELECT * FROM employees');
        res.json(data);
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
}

export const getEmployee = async (req, res) => {
    const id = req.params.id;
    try {
        const [data] = await pool.query(`SELECT * FROM employees WHERE id = ${id}`);
        if (data.length <= 0) return res.status(404).json({message: 'Empleado no encontrado'});
        res.json(data[0]);
    } catch (e) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
}

export const postEmployees = async (req, res) => {
    const { name, salary } = req.body;
    try {
        const [data] = await pool.query('INSERT INTO employees(name, salary) VALUES (?,?)', [name, salary]);
        res.send({
            id: data.insertId,
            name,
            salary,
        });
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
}

export const patchEmployees = async (req, res) => {
    const {id} = req.params;
    const {name, salary} = req.body;
    try {
        const [result] = await pool.query(` UPDATE employees SET
                                            name = IFNULL(?, name),
                                            salary = IFNULL(?, salary) 
                                            WHERE id = ?`, [name, salary, id]);
        if (result.affectedRows === 0) 
            return res.status(404).json({message: 'Emplado no encontrado'})
        const [data] = await pool.query(`SELECT * FROM employees WHERE id = ${id}`);
        res.json(data[0]);
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
}

export const deleteEmployees = async (req, res) => {
    const id = req.params.id;
    try {
        const [data] = await pool.query(`DELETE FROM employees WHERE id = ${id}`);
        if (data.affectedRows <= 0) return res.status(404).json(
            {message: 'Empleado no encontrado, no se puede borrar'});
        res.send(`Empleado con el id ${id} borrado`);
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
}