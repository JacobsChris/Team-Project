const findANPRCameraLocation = require("../../../../../../back-end/middleware/service/person/background/LocationSearch/searchLocationsByIdAndTime");


function JsonToStringSearchByCellTowerAndTime(input, intialTimeStamp, finalTimeStamp) {
    return searchLocationsByIdAndTime.searchLocationsByIdAndTime(input.cellTowerId, input.anprId, input.atmId, input.eposId, intialTimeStamp.intialTimeStamp, finalTimeStamp.finalTimeStamp)
}

let inputVal= ({
        "anprId": 73,
    },
    {
        "intialTimeStamp": "2015-05-01 14:03:29"
    }, {
        "finalTimeStamp": "2015-05-01 16:33:29"
    });
let initRes = [];

test("pop", (done) => {
    searchLocationsByIdAndTime(inputVal)
        .then(([output1, output2]) => {
            initRes = output1;
            expect(initRes).toStrictEqual("");
            done()
        })
});
// numbers to test this function with :)
// "cellTowerId": 140391,
//     "anprId": 73,
//     "atmId": 697,
//     "eposId": 696

//atm time around 1400
// the rest around 0930
