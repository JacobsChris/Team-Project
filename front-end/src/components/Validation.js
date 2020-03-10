// import React from 'react';

// const postcodeRegex = RegExp(/^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/);
// const houseNumberRegex = RegExp(/^[0-9]+[A-Za-z]?$/);
// const nameRegex = RegExp(/^(([A-Za-z]{2,})|([A-Za-z]{2,})+[-]?([A-Za-z]{2,})|([A-Za-z]{2,})+[-]?([A-Za-z]{2,})+[-]?([A-Za-z]{2,}))$/);

// export default class Validation extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//                 postcode: '',
//                 errors: {
//                     forename: '',
//                     surname: '',
//                     dob: '',
//                     birthPlace: '',
//                     houseNumber: '',
//                     houseName: '',
//                     street: '',
//                     town: '',
//                     postcode: ''
//                 },
//                 error: ''          
//         }
//     }

//     handleValidation = (field, value) => {  
//         let errors = this.state.errors;
//         switch (field) {
//           case 'forename': 
//             errors.forename = 
//             value.length < 2
//                  ? 'First Name must be at least 2 characters long!'
//                 : '';
//             break;
//             case 'surname': 
//             errors.surname = 
//             (value.length === 0 || nameRegex.test(value))
//                 ? ''
//                 : 'Surname must be at least 2 characters long!';
//             break;
//             case 'dob': 
//             errors.dob = 
//               value.length < 2
//                 ? 'DOB'
//                 : '';
//             break;
//             case 'birthPlace': 
//             errors.birthPlace = 
//               value.length < 2
//                 ? 'Place of Birth'
//                 : '';
//             break;
//             case 'houseNumber': 
//             errors.houseNumber = 
//             (value.length === 0 || houseNumberRegex.test(value))
//                 ? ''
//                 : 'House Number is not valid';
//             break;
//             case 'houseName': 
//             errors.houseName = 
//               value.length < 2
//                 ? 'House Name'
//                 : '';
//             break;
//             case 'street': 
//             errors.street = 
//               value.length < 2
//                 ? 'street'
//                 : '';
//             break;
//             case 'town': 
//             errors.town = 
//               value.length < 2
//                 ? 'Twon'
//                 : '';
//             break;
//             case 'postcode': 
//             errors.postcode = 
//               postcodeRegex.test(value)
//                 ? ''
//                 : 'Postcode is not valid';
//             break;
//           default:
//             break;
//         }
//         this.setState({errors});
//     }

//     render(){
//         this.handleValidation(this.props);
//         return(
//             <div>
//                 <span className='error'>{this.state}</span>
//             </div>
//         );
//     }
// }