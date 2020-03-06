const {searchByVehicleReg} = require("../../../../back-end/middleware/service/person/background/searchByVehicleReg");

// test('takes in an invalid string and searches for vehicles', () => {
//     expect(searchByVehicleReg("G561 VLR")).toBe("Invalid Reg No");
//     expect(searchByVehicleReg("GJA1 VLR")).toBe("Invalid Reg No");
//     expect(searchByVehicleReg("GJ61 VLRA")).toBe("Invalid Reg No");
//     expect(searchByVehicleReg("GJ61 VL")).toBe("Invalid Reg No");
// });
//
// test('takes in a valid string and searches for vehicles', () => {
//     expect(searchByVehicleReg("GJ61 VLR")).toBe("GJ61 VLR");
// });

let initRes =[];
searchByVehicleReg("GJ61 VLR", 10);
searchByVehicleReg("GJ61", 10).then(res =>{
    intRes = res;
    console.log(initRes);
});