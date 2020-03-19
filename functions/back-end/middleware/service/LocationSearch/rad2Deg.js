module.exports =
    /**
     *
     * @param input in radians
     * @returns number equivalent of input
     */
    function rad2Deg(input) {
        if (!(isNaN(input))) {
            let pi = Math.PI;
            return input * (180 / pi);
        } else {
            throw new Error('error occurred at rad 2 deg');
        }
    };


