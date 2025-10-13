import { Cidade } from "../../models";
import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const update = async(id: number, cidade: Omit<Cidade, 'id'>): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.cidade)
        .update(cidade)
        .where('id', '=', `${id}`);
        
         // result ira retornar 0 ou 1 0 = false e 1 = true
        if(result > 0) return;

} catch (error) {
    console.log(error)
    return new Error("Erro ao apagar registro");

}
};