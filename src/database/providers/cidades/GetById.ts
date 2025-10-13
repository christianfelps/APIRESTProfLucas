import { Cidade } from "../../models";
import { Knex } from "../../knex";
import { ETableNames } from "../../ETableNames";

export const getById = async(id: number): Promise<Cidade | Error> => {
    try {
        const result = await Knex(ETableNames.cidade)
    .select('*')
    .where('id', '=', `${id}`)
    .first();
    
    if(result) return result;
        return new Error("Registro não encontrado");

    } catch (error) {
        console.error(error);
               return new Error("Erro ao consultar o registro");
 
    } 
};