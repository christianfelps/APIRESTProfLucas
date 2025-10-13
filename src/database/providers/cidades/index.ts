import * as count 
from "./Count";
import * as create  from "./Create";
import * as deleteById  from "./Delete";
import * as getAll  from "./GetAll";
import * as getById  from "./GetById";
import * as update  from "./Update";

export const cidadesProvider = {
  //posso usar tudo que esta em create.
  ...create,
  ...getAll,
  ...getById,
  ...update,
  ...deleteById,
  ...count

};