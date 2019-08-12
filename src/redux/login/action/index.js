import * as action from '../../action'
import axios from 'axios'
import fireAjax from '../../../firebase.js';

// export function loginData() {
//     return dispatch => {
//         dispatch(action.fetchBegin());
//         return fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(res => res.json())
//             .then(response => {
//                 // console.log(response);
//                 dispatch(action.fetchSuccess(response))
//                 return response
//             }).catch(e => {
//                 dispatch(action.fetchError(e));
//                 return e
//             })
//     }
// }
// export function loginData(payload) {
//     console.log(payload);
//     var data=[];
//     return dispatch => {
//         dispatch(action.loginBegin());
//         fetch("https://tc-audit.herokuapp.com/employee/login",
//         {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json '
//             },
//             method: "POST",
//             body: JSON.stringify(payload)
//         })
//         .then(res =>  res.json() )
//             .then(res => 
//                 // data=res,
//                 // console.log(res.data.data.tokens[0].token),
//                 sessionStorage.setItem("token" , res.data.data.tokens[0].token),
//                 dispatch(action.loginSuccess()),
//                 console.log(data),            
//         )
//         .catch(function(res){ console.log(res) })
//     }
// }
export function loginData(payload) {
    console.log(payload);

    return dispatch => {
        dispatch(action.loginBegin());
        return fireAjax('POST' , 'https://tc-audit.herokuapp.com/employee/login' , payload)
            // .then(res => console.log(res))
            .then((result) => {
                if (result.data.code == 2000) {
                    console.log(result.data.data);
                    sessionStorage.setItem("token", result.data.data.data.tokens[0].token)
                    dispatch(action.loginSuccess(result.data))
                } else {
                    console.log(result.data);
                    dispatch(action.loginError(result.data))
                }
            })

    }
}
export function inventoryData() {
    console.log("in inventory data");
    
    return dispatch => {
        dispatch(action.inventoryDataBegin());
        return fireAjax('GET' , `https://tc-audit.herokuapp.com/inventory`)
            .then((result) => {
                if(result.status == 200){
                    dispatch(action.inventoryDataSuccess(result.data.data.data))
                    console.log(result.data.data.data)
                }else{
                    dispatch(action.inventoryDataError(result.data))
                }
            }
                      // {
                // if (result.data.code == 2000) {
                //     console.log(result.data.data);
                //     // sessionStorage.setItem("token", result.data.data.data.tokens[0].token)
                //     dispatch(action.loginSuccess(result.data))
                // } else {
                //     console.log(result.data);
                //     dispatch(action.loginError(result.data))
                // }
            // }
            
        )
    
    }}
    // export function loginData(payload){
    //         console.log(payload);

    //         return dispatch => {
    //             dispatch(action.loginBegin());
    //             axios.delete(`https://jsonplaceholder.typicode.com/users/${payload.empId}`)
    //             .then(res => {
    //               console.log(res);
    //               console.log(res.data);
    //             })

    //         }
    //     }