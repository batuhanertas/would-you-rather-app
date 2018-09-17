export const AUTH_USER = 'AUTH_USER'

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