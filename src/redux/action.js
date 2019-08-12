import * as constant from './constant';

export const loginBegin = () => ({
    type: constant.LOGIN_START
})

export const loginSuccess = (data) => ({
    type: constant.LOGIN_SUCCESS,
    payload: {data}
})

export const loginError = (error) => ({
    type: constant.LOGIN_ERROR,
    payload: {error}
})

export const inventoryDataBegin = () => ({
    type: constant.INVENORY_DATA_START
})

export const inventoryDataSuccess = (data) => ({
    type: constant.INVENORY_DATA_SUCCESS,
    payload: {data}
})

export const inventoryDataError = (error) => ({
    type: constant.INVENORY_DATA_ERROR,
    payload: {error}
})
export const changePasswordDataBegin = () => ({
    type: constant.CHANGE_PASSWORD_DATA_START
})

export const changePasswordDataSuccess = (data) => ({
    type: constant.CHANGE_PASSWORD_DATA_SUCCESS,
    payload: {data}
})

export const changePasswordDataError = (error) => ({
    type: constant.CHANGE_PASSWORD_DATA_ERROR,
    payload: {error}
})