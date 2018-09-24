import { RECEIVE_USERS } from "../actions/users"
import { SUBMIT_QUESTION, ADD_QUESTION } from "../actions/questions"

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
                    ...state[authedUser.id],
                    answers: {
                      ...state[authedUser.id].answers,
                      [qid]: answer
                    }
                }
            }
        case ADD_QUESTION:
            const { question } = action
            const questionId = question.id
            return {
                ...state,
                [question.author]: {
                    ...state[question.author].answers,
                    questions: state[question.author].questions.concat([questionId])
                }
            }

        default:
            return state;
    }
}