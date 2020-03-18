const findLocation = require('./SqlConstructorForLocations.js');
const exactStr = require('../inputvalidation/exactStr');

module.exports =
    /**
     *
     * @param ANPRPointId
     * @returns promised information about a given ANPR Camera of given ANPR Camera input
     */
    function findANPRCameraLocation(input) {
        try {
            let ANPRPointId = exactStr(input.ANPRPointId);
            return Promise.all([findLocation(ANPRPointId)]);

        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at find anpr camera location');
        }
    };
