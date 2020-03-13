const searchLocationsByIdAndTime = require("../../../../../../back-end/middleware/service/person/background/LocationSearch/searchLocationsByIdAndTime");


let inputValCelltowerID = {
    "cellTowerId": 140391,
    "intialTimeStamp": "2015-05-01 09:03:29",
    "finalTimeStamp": "2015-05-01 09:33:29",
    "limit": 1
};

let inputValAnprID = {
    "anprId": 73,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 14:33:29",
    "limit": 4
};

let expectedValAnprId = ({
    "output3": [
        {
            "address": "33 CLEVEDON ROAD, BLACKPOOL, FY1 2NX",
            "colour": "black",
            "dateOfBirth": "1964-09-15",
            "driverLicenceID": "ARNOL659154C99OL 30",
            "forenames": "Clare",
            "id": 73,
            "idType": "AnprID",
            "make": "Mercedes",
            "model": "E-Class",
            "registrationDate": "2013-08-28",
            "registrationID": 18029,
            "surname": "Arnold",
            "timeStamp": '2015-05-01T14:32:43.000Z',
            "vehicleRegistrationNo": "PI78 QZB"
        }
    ]
});


let inputAtmId = {
    "atmId": 697,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 16:33:29",
    "limit": 1
};

let inputEposID = {
    "eposId": 696,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 16:33:29",
    "limit": 1
};

let initRes = [];

test("searching with a celltowerId", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputValCelltowerID)
        .then(([output1, output2]) => {
            initRes = [output1, output2];
            expect(initRes).toStrictEqual("");
            done()
        })
});

test("searching with a anprID", (done) => {
    jest.setTimeout(100000);
    debugger
    searchLocationsByIdAndTime(inputValAnprID)
        .then((output3) => {
            console.log(output3);
            initRes = output3;
            expect(initRes).toStrictEqual.toString(expectedValAnprId);
            done()
        })
});

test("searching with a atmId", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputAtmId)
        .then(([output1, output2]) => {
            initRes = [output1, output2];
            expect(initRes).toStrictEqual("");
            done()
        })
});

test("searching with a eposId", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputEposID)
        .then(([output1, output2]) => {
            initRes = [output1, output2];
            expect(initRes).toStrictEqual("");
            done()
        })
});

