import express from "express";
import 'dotenv/config';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api',employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
    res.status(404).json({message: 'Error 404, ruta no encontrada'});
})


app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT} -> http://localhost:${PORT}`);
});