import express from "express";
import 'dotenv/config';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(employeesRoutes);
app.use(indexRoutes);


app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT} -> http://localhost:${PORT}`);
});