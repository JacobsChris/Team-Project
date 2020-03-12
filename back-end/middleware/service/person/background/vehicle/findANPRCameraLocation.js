const findLocation = require('./SqlConstructorForLocations.js');
const exactStr = require('../inputvalidation/exactStr');

module.exports =
    /**
     *
     * @param ANPRPointId
     * @returns promised information about a given ANPR Camera of given ANPR Camera input
     */
     function findANPRCameraLocation(ANPRPointId) {
        ANPRPointId = exactStr.addExactStr(ANPRPointId);
        return Promise.all([findLocation.findLocation(ANPRPointId)]);
};
