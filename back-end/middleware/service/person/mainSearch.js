
const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_citi_details/findDetailsByName.js');



// SearchByNames.searchByNames("", "","","","","Male", 10);
findDetailsByName.findDetailsByName("Stuart", "White","46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG","1948-10-02","STANMORE","Male", 5);
