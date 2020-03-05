const {addExactStr} = require("../../../../../back-end/middleware/service/person/background/inputvalidation/exactStr");

test('takes in a string and returns that string wrapped in single quotes',() =>{
    expect(addExactStr("test string")).toBe("'test string'");
});