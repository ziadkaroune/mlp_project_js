import dataFilter from './utils/DataFilter.js';
import parseArgs from './utils/ParseArgs.js';
import { DefaultArgs } from './utils/DefaultArgs.js';
import dataSeparate from './utils/Separate.js';
(async () => {
    try {
        const DATSET_PATH = './data.csv'

        const args = await parseArgs(process.argv.slice(2), DefaultArgs);

    }
    catch (err) {
        console.error(err);
    }
})()