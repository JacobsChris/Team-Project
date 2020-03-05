
const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_citi_details/findDetailsByName.js');


// function searchByCamerasArea(inputLatitude, inputLongitude, Radius, limit){
//     let searchCameras = "select * from anprcamera where (((latitude - " + inputLatitude +  ")*(latitude - " + inputLatitude + ") + (longitude - " + inputLongitude + ")*(longitude - " + inputLongitude + ")) < " + Radius + ") LIMIT" +  limit;
//     SQLauthenticate(searchCameras);
// }




module.exports = {
    JsonToStringName: function JsonToStringName(input){
        return SearchByNames.searchByNames(input.citizenID,input.forenames,input.surname,input.homeAddress,input.dateOfBirth,input.placeOfBirth,input.sex, 5);
    }
};

async function JsonToStringDetails(input){
    let initialString = "";
    try {
        initialString = JSON.parse(input);
    } catch (e) {
        initialString = input;
    }
    return SearchByNames.searchByNames(initialString.citizenID, "", "", "", "", "", "", 1);

}

let initRes = [];

JsonToStringName({"citizenID": "","forenames": "Stuart", "surname": "White", "homeAddress": "46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG","dateOfBirth": "1948-10-02", "placeOfBirth": "STANMORE", "sex": "Male" })
    .then(res => {
        initRes = res;
        console.log("init res = ", JSON.stringify(initRes));
    })
// let initRes = JsonToStringDetails({"citizenID": "1125143125"});



