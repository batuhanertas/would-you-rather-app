import { RECEIVE_USERS } from "../actions/users";
import { SUBMIT_QUESTION } from "../actions/questions";

export default function users (state ={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SUBMIT_QUESTION:
            const { authedUser, qid, answer } = action;

            return {
                ...state,
                [authedUser.id]: {
                    ...[authedUser.id],
                    answers: {
                      ...[authedUser.id].answers,
                      [qid]: answer
                    }
                }
            }
        default:
            return state;
    }
}