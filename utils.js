const fs = require('fs');
const os = require('os');

const homeDir = os.homedir();

const logger = (string = '') => {
    fs.writeFileSync(
        `${homeDir}/Desktop/log.txt`,
        `${os.EOL}[${new Date().toUTCString()}] ${JSON.stringify(
            string,
            null,
            4
        )}`,
        { flag: 'a' }
    );
};

module.exports = {
    logger
};
