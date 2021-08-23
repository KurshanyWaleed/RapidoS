import * as Actions from '../actions/constantes'


const initialState = {
    token: localStorage.getItem('jwt'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    error: null
};

export const getUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOGOUT_SUCCESS:
            return {
                token: localStorage.getItem('jwt'),
                isAuthenticated: null,
                isLoading: false,
                user: {}
            };
        case Actions.USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case Actions.USER_LOADED:
            const token = localStorage.getItem('token');

            return {
                ...state,
                token: action.token,
                isAuthenticated: true,
                isLoading: false,
                user: { id: action.user.data._id, name: action.user.data.name }

            };


        case Actions.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
                user: { id: action.payload.id, name: action.payload.name, type: action.payload.type }
            };
        case Actions.AUTH_ERROR:
        case Actions.LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
                user: null,
                error: action.payload

            };
        default: return state;




    }
}