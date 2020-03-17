const addWildStr = require("../../../../back-end/middleware/service/inputvalidation/wildStr");


test('takes in a string and adds % to the start and end as well as wrapping it in single quotes', () => {
    expect(addWildStr("test string")).toBe("'%test string%'");
});