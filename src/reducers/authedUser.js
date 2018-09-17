import { AUTH_USER } from "../actions/authedUser";

export default function authUser (state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.authedUser
            }
        default:
            return state;
    }
}