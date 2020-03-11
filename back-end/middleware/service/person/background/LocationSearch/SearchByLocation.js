const wildStr = require('../inputvalidation/wildStr.js');
const exactStr = require('../inputvalidation/exactStr');

const rad2Deg = require('./rad2Deg.js');
const searchCamerasByArea = require('./searchCamerasByArea');
const searchATMPointsByArea = require('./searchATMPointByArea.js');
const searchCellTowerByArea = require('./searchCellTowerByArea.js');
const searchEposTerminalByArea = require('./searchEposTerminalsByLocation.js');



module.exports = {
    // /**
    //  *  @author Anthony Wilkinson & Chris
    //  *  @function this function obtains an input originally from a JSON, deconstructs the incomming data into citizenID,
    //  *  forenames, surname, homeAddress, dateOfBirth, Sex and a Limit which is hardcoded for the time being to be 5 total. The
    //  *  function then turns these input parameters into a MYSQL search string for sqlauth to querry the database. wildstr and
    //  *  exactstr allow for a LIKE or an exact match. The MYSQL string is constructed in the functions: findPersonByPerson,
    //  *  findBankAccountByPerson, findMobileByPerson, findVehicleByPerson. Those functions then send the constructed strings to
    //  *  mysql auth where it then querries the database (see mysql auth JSDocs for more info) and then returns it here. The
    //  *  promise.all waits for all querries from the database to be accompolished before returning the data, this returned data
    //  *  is within an array that takes the format [{person},{bank},{mobile},{vehicle}].
    //  *  @development there could be an intial execution of finding person, that the results of are then sent to bank, mobile and
    //  *  vehicle in the form =>
    //  *      promise.all([person]).then(res => promise.all([findBankAccountByPerson(res)...
    //  *
    //  *  the type of error needs a more accurate error statement
    //  *
    //  *  @return this function returns an array of JSON objects to be passed up
    //  *  @require this function to work it requires a JSON object to be passed into JsonToStringDetails()
    //  *  */
    searchByLocation: function searchByLocation(inputLatitude, inputLongitude, Radius) {
        let earthR = 6371;

        //create a box defined by the input query
        let maxLat = inputLatitude + rad2Deg.rad2Deg(Radius/earthR);
        let minLat = inputLatitude - rad2Deg.rad2Deg(Radius/earthR);
        let maxLon = inputLongitude + rad2Deg.rad2Deg(Math.asin(Radius/earthR) / Math.cos(rad2Deg.rad2Deg(inputLatitude)));
        let minLon = inputLongitude - rad2Deg.rad2Deg(Math.asin(Radius/earthR) / Math.cos(rad2Deg.rad2Deg(inputLatitude)));

        //query the database and get results which reside in the box




        inputLatitude = exactStr.addExactStr(inputLatitude);
        inputLongitude = exactStr.addExactStr(inputLongitude);
        Radius = exactStr.addExactStr(Radius);


        return Promise.all([
            searchCamerasByArea.searchCamerasByArea(inputLatitude, inputLongitude, Radius,minLat,maxLat,minLon,maxLon),
            searchATMPointsByArea.searchATMPointsByArea(inputLatitude, inputLongitude, Radius,minLat,maxLat,minLon,maxLon),
            searchCellTowerByArea.searchCellTowerByArea(inputLatitude, inputLongitude, Radius,minLat,maxLat,minLon,maxLon),
            searchEposTerminalByArea.searchEposTerminalByArea(inputLatitude, inputLongitude, Radius,minLat,maxLat,minLon,maxLon)
        ]);
        // }
    }
};

// let working1 = 6371 * (Math.acos ( Math.cos ( rad2Deg.deg2Rad(inputLatitude) )* Math.cos( rad2Deg.deg2Rad( inputLatitude-2 ) )* Math.cos( rad2Deg.deg2Rad( inputLongitude-2 ) - rad2Deg.deg2Rad(inputLongitude ) )+ Math.sin ( rad2Deg.deg2Rad(inputLatitude) ) * Math.sin( rad2Deg.deg2Rad( inputLatitude-2 ) )));
//
// let working2 = (2*6371)*(Math.asin(Math.sqrt(((Math.sin(rad2Deg.deg2Rad((inputLatitude-2)-(inputLatitude))/2))**2) + (Math.cos(rad2Deg.deg2Rad(inputLatitude)) * (Math.cos(rad2Deg.deg2Rad(inputLatitude-2))) * (Math.sin(rad2Deg.deg2Rad((inputLongitude-2)-(inputLongitude))/2)) )**2 ));
//
// console.log("input lat",inputLatitude,"input long", inputLongitude);
// console.log("test lat", inputLatitude-2, "test long", inputLongitude-2);
// console.log("distance between points",working1);

