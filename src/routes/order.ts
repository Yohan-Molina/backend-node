import { Router } from "express";
import { getOrders } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session";
const router = Router();

/**
 * Solo puede acceder con session activa - JWT valido
 */

router.get('/', checkJwt, getOrders);


export { router };