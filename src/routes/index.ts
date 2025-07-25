import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import {cidadesController} from './../controller';
const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.CONFLICT).send("Ola mundo");
});

router.post('/cidades',
   cidadesController.createValidation,
    cidadesController.create );
    
router.get('/', cidadesController.create );


export default router;
