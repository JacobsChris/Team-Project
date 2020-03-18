const findCellTowerLocationBasedOnCellTowerId = require("../../../../back-end/middleware/service/PhoneData/findCellTowerLocationBasedOnCellTowerId");

let initRes = [];
let expectedRes = [
    {
        "cellTowerId": 4,
        "latitude": 51.3883167417014,
        "longitude": -2.33367232628084,
        "operator": "Airwave",
        "type": "TETRA"
    }
];

let inputVal = 4;

test("Takes in an object with CallerCellTower ID as a keypair, and returns information about the Cell Tower  of that ID", (done) => {
    findCellTowerLocationBasedOnCellTowerId(inputVal)
        .then(([CellTowerLoc]) => {
            initRes = CellTowerLoc;
            expect(initRes).toStrictEqual(expectedRes);
            done()
        })
});

test("Takes in an object with ReceiverCellTower ID as a keypair, and returns information about the Cell Tower  of that ID.  These two tests should be identical", (done) => {
    findCellTowerLocationBasedOnCellTowerId(inputVal)
        .then(([CellTowerLoc]) => {
            initRes = CellTowerLoc;
            expect(initRes).toStrictEqual(expectedRes);
            done()
        })
});

test("Takes in an object with ReceiverCellTower ID as a keypair, and returns information about the Cell Tower  of that ID.  These two tests should be identical", (done) => {
    findCellTowerLocationBasedOnCellTowerId(inputVal)
        .then(([CellTowerLoc]) => {
            initRes = CellTowerLoc;
            expect(initRes).toStrictEqual(expectedRes);
            done()
        })
});