
const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_citi_details/findDetailsByName.js');


module.exports = {
    JsonToStringName: function JsonToStringName(input){
        return SearchByNames.searchByNames(input.citizenID,input.forenames,input.surname,input.homeAddress,input.dateOfBirth,input.placeOfBirth,input.sex);
    },
    JsonToStringDetails: function JsonToStringDetails(input){
        return SearchByNames.searchByNames(initialString.citizenID, "", "", "", "", "", "", 1);

    }
};


let initRes = [];

JsonToStringName({"citizenID": "","forenames": "Stuart", "surname": "White", "homeAddress": "46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG","dateOfBirth": "1948-10-02", "placeOfBirth": "STANMORE", "sex": "Male" })
    .then(res => {
        initRes = res;
        console.log("init res = ", JSON.stringify(initRes));
    })


// JsonToStringDetails({"citizenID": "1125143125"})
//     .then(res => {
//         initRes = res;
//         console.log("init res = ", JSON.stringify(initRes));
// })



