
import {
    MENU_ACTION_LOADING,
    MENU_ACTION_FAILED,
    MENU_ACTION_SUCCESS
    } from "../actions/MenuActions"
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case MENU_ACTION_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null,
                menuOpen:false
            };
        case MENU_ACTION_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                menuOpen:false
            }
        case MENU_ACTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                menuOpen:action.payload
            }
        default:
            return state;
    }
}

const initialState = {
    error:null,
    isFetching:false,
    menuOpen:false
};