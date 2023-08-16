import { Router } from 'express';
import {
    deleteEmployees,
    getEmployees, postEmployees, putEmployees
} from '../controllers/employees.controller.js'

const router = Router();

router.get('/', getEmployees);

router.post('/', postEmployees);

router.put('/', putEmployees);

router.delete('/', deleteEmployees);

export default router;