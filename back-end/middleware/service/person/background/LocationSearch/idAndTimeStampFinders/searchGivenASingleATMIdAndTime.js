const auth = require('../../sqlauth')


module.exports =
    /**
     * @author  Anthony
     *
     * @function this function takes in an input
     *
     *  @return this function returns an JSON object to be passed up
     *
     *  @require this function to work it requires a JSON object to be passed into JsonToStringName()
     * */
     function searchGivenASingleATMIdAndTime(atmId,intialTimeStamp,finalTimeStamp,limit) {
         debugger;
         try{
             if(limit !== undefined) {
                 let searchCameras = "select * from atmTransaction where (timestamp Between "
                     + intialTimeStamp + " And " + finalTimeStamp + ") AND atmId=" + atmId + " Limit " + limit;
                 return auth(searchCameras);
             }
             else{
                 let searchCameras = "select * from atmTransaction where (timestamp Between "
                     + intialTimeStamp + " And " + finalTimeStamp + ") AND atmId=" + atmId + " Limit " + limit;
                 return auth(searchCameras);
             }
         }
         catch (e) {
             console.log(e.name);
             console.log(e.message);
             throw " error searchGivenASingleAtmIdAndTime"
         }


};