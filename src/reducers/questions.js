import { RECEIVE_QUESTIONS, SUBMIT_QUESTION } from "../actions/questions";

export default function questions (state ={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SUBMIT_QUESTION:
        const { authedUser, qid, answer } = action;


        return {
            ...state,
            [qid]: {
                ...state[qid],
                [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser.id])
                }
            }
        }
        default:
            return state;
    }
}