const findCellTowerLocation = require('./SqlConstructorForCellTowerLocation');
const exactStr = require('../inputvalidation/exactStr');
module.exports =
    /**
     *
     * @param cellTowerId
     * @returns promised information about a celltower of given tower ID
     */
     function findCellTowerLocationBasedOnCellTowerId(cellTowerId) {
        cellTowerId = exactStr.addExactStr(cellTowerId);
        return Promise.all([findCellTowerLocation.findCellTowerLocation(cellTowerId)]);
};
