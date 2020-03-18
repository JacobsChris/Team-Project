const findCellTowerLocation = require('./SqlConstructorForCellTowerLocation');
const exactStr = require('../inputvalidation/exactStr');
module.exports =
    /**
     *
     * @param input is an boject containing the key cellTowerId
     * @returns promised information about a celltower of given tower ID
     */
    function findCellTowerLocationBasedOnCellTowerId(cellTowerId) {
        try {
            return Promise.all([findCellTowerLocation(cellTowerId)]);

        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at find cell tower location based on cell tower id');
        }
    };
