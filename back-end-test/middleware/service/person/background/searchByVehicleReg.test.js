const {searchByVehicleReg} = require("../../../../../back-end/middleware/service/person/background/searchByVehicleReg");

test('takes in an invalid string and searches for vehicles', () => {
    expect(searchByVehicleReg("G561 VLR")).toBe("Invalid Reg No");
    expect(searchByVehicleReg("GJA1 VLR")).toBe("Invalid Reg No");
    expect(searchByVehicleReg("GJ61 VLRA")).toBe("Invalid Reg No");
    expect(searchByVehicleReg("GJ61 VL")).toBe("Invalid Reg No");
});
let initRes = [];

test('takes in a valid string and searches for vehicles', () => {
    searchByVehicleReg("GJ61 VLR", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual([]);
});

test('takes in a valid partial match that is in DB and searches for vehicles', () => {
    searchByVehicleReg("GI03 ___", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual("");
});

test('takes in a valid string that is in DB and searches for vehicles', () => {
    searchByVehicleReg("GI03 YXF", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual("");
});