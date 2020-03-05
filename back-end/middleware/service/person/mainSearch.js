
const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_citi_details/findDetailsByName.js');


// function searchByCamerasArea(inputLatitude, inputLongitude, Radius, limit){
//     let searchCameras = "select * from anprcamera where (((latitude - " + inputLatitude +  ")*(latitude - " + inputLatitude + ") + (longitude - " + inputLongitude + ")*(longitude - " + inputLongitude + ")) < " + Radius + ") LIMIT" +  limit;
//     SQLauthenticate(searchCameras);
// }




function JsonToStringName(input){
    let string ="";
    try {
        string = JSON.parse(input);
    } catch (e) {
        string = input;
    }
    let result = SearchByNames.searchByNames(string.citizenID,string.forenames,string.surname,string.homeAddress,string.dateOfBirth,string.placeOfBirth,string.sex, 5);
    return result;
}

function JsonToStringDetails(input){
    let initialString = "";
    try {
        initialString = JSON.parse(input);
    } catch (e) {
        initialString = input;
    }
    let initialResult = SearchByNames.searchByNames(initialString.citizenID,"","","","","","",1);
    return initialResult;
}

// JsonToStringName({"citizenID": "","forenames": "Stuart", "surname": "White", "homeAddress": "46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG","dateOfBirth": "1948-10-02", "placeOfBirth": "STANMORE", "sex": "Male" })
// JsonToStringDetails({"citizenID": "1125143125"})

findDetailsByName.findDetailsByName("", "White","46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG","1948-10-02","STANMORE","Male", 5);
// searchByVehicleReg.searchByVehicleReg("____ ___",10);
