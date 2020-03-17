const findCellTowerLocation = require('./SqlConstructorForCellTowerLocation');
const exactStr = require('../inputvalidation/exactStr');
module.exports =
    /**
     *
     * @param input is an boject containing the key cellTowerId
     * @returns promised information about a celltower of given tower ID
     */
     function findCellTowerLocationBasedOnCellTowerId(input) {
        let cellTowerId = exactStr(input.cellTowerId);
        return Promise.all([findCellTowerLocation(cellTowerId)]);
};
