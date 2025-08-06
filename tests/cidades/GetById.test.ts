import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


   describe('Cidades - GetById', () => {

    it('Busca cidades por ID', async () => {
       const  res1 = await testServer
        .post('/cidades')
        .send({ nome: 'Mogi das Cruzes' })

       const  res1Id = await testServer
        .get('/cidades/' + res1.body)
        .send()

        expect(res1Id.statusCode).toEqual(StatusCodes.OK);
        expect(res1Id.body).toHaveProperty('nome');
    })

        it('Tenta buscar registro que não existe', async () => {

       const  res1 = await testServer
        .get('/cidades/99999')
        .send()

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    })


});