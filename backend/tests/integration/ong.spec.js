const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {
    beforeEach(async() =>{
       await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    });

    it('should be able to create new ong', async() =>{
        const response = await request(app).post('/ongs').send({
            name: "APAD32",
            email: "contato@gmail.com",
            whatsapp: "4070521517",
            city: "conqs",
            uf: "BA"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});