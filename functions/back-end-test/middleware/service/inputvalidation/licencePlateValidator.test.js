const licencePlateValidator = require("../../../../back-end/middleware/service/inputvalidation/licencePlateValidator");

test('takes in a string and ensures it is a valid Reg No', () => {
    expect(licencePlateValidator("GJ61 VLR")).toBe("'GJ61 VLR'");
});

test('takes in an incomplete RegNo and ensures it is a valid Reg No', () => {
    expect(licencePlateValidator("GJ__ VLR")).toBe("'GJ__ VLR'");
});

test('takes in an invalid regNo that has a number where a letter should be, and returns an error', (done) => {
    expect(() => {
        licencePlateValidator("G561 VLR")
    }).toThrow("Not a valid vehicle registration number");
    done();
});

test('takes in an invalid regNo that has an extra character, and returns an error', (done) => {
    expect(() => {
        licencePlateValidator("GJ61 VLRA")
    }).toThrow("Not a valid vehicle registration number");
    done();
});

test('takes in an invalid regNo that is missing a character, and returns an error', (done) => {
    expect(() => {
        licencePlateValidator("GJ61 VL")
    }).toThrow("Not a valid vehicle registration number");
    done();
});

