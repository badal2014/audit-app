import * as action from '../../action'
import fireAjax from '../../../firebase';


export function changePassword(payload) {
    console.log("in change pass redux" , payload);
    
    return dispatch => {
        dispatch(action.changePasswordDataBegin());
        return fireAjax('POST' , `https://tc-audit.herokuapp.com/employee/changePassword` ,payload)
            .then((result) => { console.log(result);
            
                if(result.data.code == 2000){
                    dispatch(action.changePasswordDataSuccess(result))
                    console.log(result)
                }else{
                    dispatch(action.changePasswordDataError(result.data.code))
                }
            }
            )
            // .then(error => dispatch(action.changePasswordDataError()))
    
    }}