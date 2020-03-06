const auth = require("../../../../../back-end/middleware/service/person/background/sqlauth");
let response = [];

test('Tests SQL Auth..does..something????', () => {
    auth.SQLauthenticate("SELECT * FROM Users LIMIT 10").then(res => {
        response.fulfillmentValue = res;
    });
    expect(response).toBe("Not this");

    // expect(auth.SQLauthenticate("SELECT * FROM Users LIMIT 10")).toBe("");
});