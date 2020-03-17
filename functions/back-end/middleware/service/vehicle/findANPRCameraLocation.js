const findLocation = require('./SqlConstructorForLocations.js');
const exactStr = require('../inputvalidation/exactStr');

module.exports =
    /**
     *
     * @param ANPRPointId
     * @returns promised information about a given ANPR Camera of given ANPR Camera input
     */
     function findANPRCameraLocation(input) {
        let ANPRPointId = exactStr(input.ANPRPointId);
        return Promise.all([findLocation(ANPRPointId)]);
};
