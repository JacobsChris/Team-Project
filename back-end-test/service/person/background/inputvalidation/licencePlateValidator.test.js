const {licencePlateValidator} = require("../../../../../back-end/middleware/service/person/background/inputvalidation/licencePlateValidator");

test('takes in a string and ensures it is a valid Reg No', () => {
    expect(licencePlateValidator("GJ61 VLR")).toBe("GJ61 VLR");
    expect(licencePlateValidator("G561 VLR")).toBe("Invalid Reg No");
    expect(licencePlateValidator("GJA1 VLR")).toBe("Invalid Reg No");
    expect(licencePlateValidator("GJ61 VLRA")).toBe("Invalid Reg No");
    expect(licencePlateValidator("GJ61 VL")).toBe("Invalid Reg No");
});