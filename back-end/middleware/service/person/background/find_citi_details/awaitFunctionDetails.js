

module.exports = {
    resolveAfter2Seconds: function resolveAfter2Seconds(Input) {
        let querryResult = JSON.parse(JSON.stringify(Input));
        if (querryResult.isFulfilled == true) {
            return new querryResult;
        } else {
            console.log("error occured try again")
        }
    }
};