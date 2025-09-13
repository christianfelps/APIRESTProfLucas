import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const getById = async(id: number): Promise<Pick<ICidade, 'id'> | Error> => {
    const findedIndex = await Knex.select('id').from(ETableNames.cidade).where('id', id).first();
    console.log(id)
    return findedIndex as Pick<ICidade, 'id'>;
} 