export const AUTH_USER = 'AUTH_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function authUser(authedUser) {
    return {
        type: AUTH_USER,
        authedUser
    }
}

export function handleAuthUser (user) {
    return (dispatch) => {
        dispatch(authUser(user))
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        authedUser: {}
    }
}

export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(logoutUser())
    }
}


