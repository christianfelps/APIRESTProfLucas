import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const update = async(  id: number): Promise<number | Error> => {
    const findedIndex = await Knex.select('id').from(ETableNames.cidade).where(id);
    console.log(id)
    return 1
//  try {
//   const [result] = await Knex(ETableNames.cidade).update(cidades).returning('id');
// if (typeof result === 'object') {
//     return result.id;
// } else if(typeof result === 'number' ) {
//     return result
// }
//     return new Error('Erro ao cadastrar o registro');
//  } catch (error) {
//     console.log(error)
//     return Error('Erro ao cadastrar o registro')
//  }
} 