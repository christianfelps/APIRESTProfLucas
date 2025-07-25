import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import {cidadesController} from './../controller';
const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.CONFLICT).send("Ola mundo");
});

router.post('/cidades', cidadesController.createValidation, cidadesController.create );
router.get('/cidades', cidadesController.getAllValidation, cidadesController.getAll );
router.get('/cidades/:id', cidadesController.getByIdValidation, cidadesController.getById );
router.put('/cidades/:id', cidadesController.updateValidation, cidadesController.update );
router.delete('/cidades/:id', cidadesController.deleteValidation, cidadesController.deleteById );
  


export default router;
