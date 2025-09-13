import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";
import { cidadesProvider } from "../../database/providers/cidades";

interface IParamProps {
  id?: number,
}

interface IBodyProps {
    nome: string
}


export const updateValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>( yup.object().shape({
    nome: yup.string().required().min(3),
    })),
    params: getSchema<IParamProps>( yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
    }))
}));





export const update = async (req: Request<IParamProps,{}, IBodyProps>, res: Response) => {

  const result = await cidadesProvider.update(1);
  if(result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }


  return res.status(StatusCodes.OK).json(result)

  return res.status(StatusCodes.NO_CONTENT).send()
};