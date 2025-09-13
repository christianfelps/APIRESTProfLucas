import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";
import { cidadesProvider } from "../../database/providers/cidades";

interface IParamProps {
id?: number
}



export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>( yup.object().shape({
    id: yup.number().integer().required().moreThan(0)   
 }))
}));





export const getById = async (req: Request<IParamProps>, res: Response) => {

const id = Number(req.params.id);

const result = await cidadesProvider.getById(id);

return res.status(StatusCodes.OK).json({
  result
})
};