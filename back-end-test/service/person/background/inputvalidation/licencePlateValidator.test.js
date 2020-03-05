import {licencePlateValidator} from "../../../../../back-end/middleware/service/person/background/inputvalidation/licencePlateValidator";

test('takes in a string and ensures it is a valid Reg No', () => {
    expect(licencePlateValidator("GJ61 VLR")).toBe("GJ61 VLR");
    expect(licencePlateValidator("GJ61 VLR")).toBe("GJ61 VLR");
    expect(licencePlateValidator("GJ61 VLR")).toBe("GJ61 VLR");
    expect(licencePlateValidator("GJ61 VLR")).toBe("GJ61 VLR");
});