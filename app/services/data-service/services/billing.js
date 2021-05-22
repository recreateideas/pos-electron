const { rejects } = require('assert');
const fs = require('fs');
const homeDir = require('os').homedir();

const exportReceipt = async receiptBody => {
    console.debug('Export Receipt [START]');
    const desktopDir = `${homeDir}/Desktop`;

    try {
        await new Promise((resolve, reject) =>
            setTimeout(() => {
                try {
                    fs.writeFileSync(
                        `${desktopDir}/receipt_${+new Date()}.txt`,
                        JSON.stringify(receiptBody, null, 4)
                    );
                    resolve();
                } catch (e) {
                    reject(e);
                }
            }, 1000)
        );
    } catch (e) {
        console.debug('Export Receipt [ERR]');
        return e;
    }
    console.debug('Export Receipt [END]');
    return;
};

module.exports = {
    exportReceipt
};
