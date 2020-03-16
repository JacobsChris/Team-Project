const { Sequelize } = require('sequelize');
const rawdata = require('../../../../../../back-end/middleware/service/person/background/configProd.json');
const expect = require('chai').expect;

jest.useFakeTimers();

const connection = new Sequelize(rawdata);

it("should return undefined if connection is successful", () => {
    connection.authenticate()
    .then(response => {
        expect(response).to.be(undefined);
    });
});