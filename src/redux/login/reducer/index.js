import * as constant from '../../constant';

let initialState = {
    login: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""
    },
    inventory: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""
    }
}

export default function dataReducer(state = initialState, action){

    
    switch(action.type){
        case constant.LOGIN_START:
            return{
                ...state,
                login: {
                    data: [],
                    error: false,
                    success: false,
                    loading: true,
                    message: ""
                }
            }
        case constant.LOGIN_SUCCESS:
            return{
                ...state,
                login: {
                    data: action.payload,
                    error: false,
                    success: true,
                    loading: false,
                    message: ""
                }
            }
        case constant.LOGIN_ERROR: 
            return{
                ...state,
                login: {
                    data: [],
                    error: true,
                    success: false,
                    loading: false,
                    message: action.payload
                }
            }
            case constant.INVENORY_DATA_START:
            return{
                ...state,
                inventory: {
                    data: [],
                    error: false,
                    success: false,
                    loading: true,
                    message: ""
                }
            }
        case constant.INVENORY_DATA_SUCCESS:
            return{
                ...state,
                inventory: {
                    data: action.payload.data,
                    error: false,
                    success: true,
                    loading: false,
                    message: ""
                }
            }
        case constant.INVENORY_DATA_ERROR: 
            return{
                ...state,
                inventory: {
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