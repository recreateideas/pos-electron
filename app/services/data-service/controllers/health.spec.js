require('../../__mocks__');
const { healthCheck } = require('./health');

const req = {};

const res = {
    status: jest.fn().mockImplementation(() => ({
        send: jest.fn(),
        json: jest.fn()
    })),
    send: jest.fn(),
    json: jest.fn()
};

describe('healthCheck', () => {
    it('should always return 200 when hit', async done => {
        await healthCheck(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        done();
    });
});
