const {findVehicleByPerson} = require("../../../../../../back-end/middleware/service/person/background/FindByPerson/findVehicleByPerson");


let initRes = [];

test('takes in info about a person and searches for a vehicle', () => {
    findVehicleByPerson("Stuart", "White", "", "", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual("Not this");
});