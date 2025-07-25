import * as create  from "./Create";
import * as getAll  from "./GetAll";

export const cidadesController = {
  //posso usar tudo que esta em create.
  ...create,
  ...getAll,
  
};