import express from "express";
import 'dotenv/config';
import employeesRoutes from './routes/employees.routes.js'

const app = express();
const PORT = process.env.PORT

app.use(express.json());

app.use(employeesRoutes)

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT} -> http://localhost:${PORT}`);
});