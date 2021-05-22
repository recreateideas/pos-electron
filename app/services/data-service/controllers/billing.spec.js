require('../../__mocks__');
const { checkout } = require('./billing');
const { billing: service } = require('../services');

beforeEach(() => {
    jest.resetAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

const req = {
    body: {}
};

const res = {
    status: jest.fn().mockImplementation(() => ({
        send: jest.fn(),
        json: jest.fn()
    })),
    send: jest.fn(),
    json: jest.fn()
};

const Err = new Error('Jest Error');

describe('checkout', () => {
    it('should throw any error service.exportReceipt throws', async done => {
        service.exportReceipt = jest.fn().mockImplementation(() => {
            throw Err;
        });
        try {
            await checkout(req, res);
        } catch (err) {
            expect(err).toEqual(Err);
        }
        done();
    });
    it('should not break but return code 500 with any error service.exportReceipt returns', async done => {
        service.exportReceipt = jest.fn().mockImplementation(() => {
            return Err;
        });
        await checkout(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith(Err);
        done();
    });
    it('should return a response with code 204', async done => {
        service.exportReceipt = jest.fn();
        await checkout(req, res);
        expect(res.status).toHaveBeenCalledWith(204);
        done();
    });
});
