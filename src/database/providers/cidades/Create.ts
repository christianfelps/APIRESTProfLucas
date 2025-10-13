import { Cidade } from "../../models";
import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const create = async(cidades: Omit<Cidade, 'id'>): Promise<number | Error> => {
    
 try {
  const [result] = await Knex(ETableNames.cidade).insert(cidades).returning('id');
if (typeof result === 'object') {
    return result.id;
} else if(typeof result === 'number' ) {
    return result;
}
    return new Error('Erro ao cadastrar o registro');
 } catch (error) {
    console.log(error)
    return Error('Erro ao cadastrar o registro')
 }
};