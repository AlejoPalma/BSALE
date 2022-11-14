import express from "express";
import productosRoutes from './routes/productos.routes.js'

const app = express();

app.use(express.json())

app.use('/api', productosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app