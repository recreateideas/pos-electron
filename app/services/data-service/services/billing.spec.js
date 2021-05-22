require('../__mocks__');
const fs = require('fs');
const { exportReceipt } = require('./billing');

describe('exportReceipt', () => {
    it('should return any error fs.writeFileSync throws', async done => {
        const Err = new Error('Jest Error');
        fs.writeFileSync = jest.fn().mockImplementationOnce(() => {
            throw Err;
        });
        const result = await exportReceipt();
        expect(result).toEqual(Err);
        done();
    });
    it('should return undefined if fs.writeFileSync was successfully invoked', async done => {
        fs.writeFileSync = jest.fn();
        const result = await exportReceipt();
        expect(result).toBeUndefined();
        done();
    });
});
