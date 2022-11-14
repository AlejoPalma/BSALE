import { Router } from "express";
import { getProductos, getProductosCategoria} from "../controllers/productos.controller.js";

const router = Router();

router.get('/productos', getProductos);

router.get('/productos/:category', getProductosCategoria);

export default router;