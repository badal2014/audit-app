import * as constant from '../../constant';

let initialState = {
    password: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""
    }
}

export default function dataReducer(state = initialState, action){
    console.log(action.payload);
    
    switch(action.type){
        case constant.CHANGE_PASSWORD_DATA_START:
            return{
                ...state,
                password: {
                    data: [],
                    error: false,
                    success: false,
                    loading: true,
                    message: ""
                }
            }
        case constant.CHANGE_PASSWORD_DATA_SUCCESS:
            return{
                ...state,
                password: {
                    data: action.payload,
                    error: false,
                    success: true,
                    loading: false,
                    message: action.payload.data.data.data.message
                }
            }
        case constant.CHANGE_PASSWORD_DATA_ERROR: 
            return{
                ...state,
                password    : {
                    data: [],
                    error: true,
                    success: false,
                    loading: false,
                    message: action.payload
                }
            }
        default: 
            return state;
    }
}