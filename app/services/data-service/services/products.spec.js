require('../__mocks__');
const { queryProducts } = require('./products');
const { burgers, sides } = require('./_data');

describe('queryProducts', () => {
    it('should return data as { burgers, sides }', async done => {
        const result = await queryProducts();
        expect(result).toEqual({ burgers, sides });
        done();
    });
});
