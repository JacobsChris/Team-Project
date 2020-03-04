

module.exports = {
    resolveAfter2Seconds: function resolveAfter2Seconds(Input) {
        let querryResult = JSON.parse(JSON.stringify(Input));
        if (querryResult.isFulfilled == true) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(querryResult.fulfillmentValue);
                }, 2000);
            });
        } else {
            console.log("error occured try again")
        }
    }
};