require('../__mocks__');
const { getProducts } = require('./products');
const { products: service } = require('../services');

beforeEach(() => {
    jest.resetAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

const req = {};

const res = {
    status: jest.fn().mockImplementation(() => ({
        send: jest.fn(),
        json: jest.fn()
    })),
    send: jest.fn(),
    json: jest.fn()
};

const Err = new Error('Jest Error');

describe('getProducts', () => {
    it('should throw any error service.queryProducts throws', async done => {
        service.queryProducts = jest.fn().mockImplementation(() => {
            throw Err;
        });
        try {
            await getProducts(req, res);
        } catch (err) {
            expect(err).toEqual(Err);
        }
        done();
    });
    it('should return the products service.queryProducts returns', async done => {
        const products = { some: 'dummy-product' };
        service.queryProducts = jest.fn().mockImplementation(() => {
            return products;
        });
        await getProducts(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ products });
        done();
    });
});
