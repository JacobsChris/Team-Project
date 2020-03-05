
const resolveAfter2Seconds = require('./awaitFunction.js');
module.exports = {
    asyncCall: async function asyncCall(Input) {
        console.log('calling');
        const result = await resolveAfter2Seconds.resolveAfter2Seconds(Input);
        console.log(result);
        return result;
    }
};