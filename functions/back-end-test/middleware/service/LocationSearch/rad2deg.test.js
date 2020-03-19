const rad2Deg = require("../../../../back-end/middleware/service/LocationSearch/rad2Deg");

let inputArray = [1.0, 2.0, Math.PI, 2.0 * Math.PI];
let expectedOutputArray = [57.29577951308232, 114.59155902616465, 180, 360];


test('checks that rad2Deg works', () => {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        outputArray[i] = rad2Deg(inputArray[i]);
    }
    expect(outputArray).toStrictEqual(expectedOutputArray);
});

test('checks that rad2Deg doesn\'t work correctly', () => {
    expect(() => {
        rad2Deg("abc")
    }).toThrow("error occurred at rad 2 deg");
});