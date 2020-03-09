const mainSearch = require("../mainSearch");

async function fun(input) {

    let citizen;
    let bankAccount;
    let mobiles;
    let vehicle;

    await mainSearch.JsonToStringDetails(input).then(([Citizen, BankAccount, Mobiles, Vehicle]) => {
        citizen = Citizen;
        bankAccount = BankAccount;
        mobiles = Mobiles;
        vehicle = Vehicle;

        //
        // let bankDetails = mainSearch.JsonToStringBankDetails(personDetails[1]);
        // console.log(bankDetails);
        //
        // let transactions = mainSearch.JsonToStringTransactions(bankDetails[0]);
        // console.log(transactions);

    });
    console.log(citizen, bankAccount);
}


fun({
    "citizenID": "",
    "forenames": "Gillian Kathryn",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": "",
    "placeOfBirth": "",
    "sex": ""
});