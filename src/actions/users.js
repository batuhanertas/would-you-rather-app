

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const AUTH_USER = 'AUTH_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function authUser(user) {
    return {
        type: AUTH_USER,
        user
    }
}

export function handleAuthUser (user) {
    return (dispatch) => {
        dispatch(authUser(user))
    }
}