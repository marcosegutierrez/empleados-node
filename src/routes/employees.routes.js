import { Router } from 'express';
import {
    deleteEmployees, getEmployee,
    getEmployees, postEmployees,
    patchEmployees, putEmployees
} from '../controllers/employees.controller.js'

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', postEmployees);

router.patch('/employees/:id', patchEmployees);

router.put('/employees/:id', putEmployees);

router.delete('/employees/:id', deleteEmployees);

export default router;