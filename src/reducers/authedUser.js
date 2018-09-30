import { AUTH_USER, LOGOUT_USER } from "../actions/authedUser";

export default function authUser (state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.authedUser
            }
        case LOGOUT_USER:
            return {}
        default:
            return state;
    }
}