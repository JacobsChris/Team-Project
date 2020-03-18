module.exports =
    /**
     *
     * @param input in radians
     * @returns number equivalent of input
     */
    function rad2Deg(input) {
        try {
            let pi = Math.PI;
            return input * (180 / pi);
        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at rad 2 deg');
        }
    };


