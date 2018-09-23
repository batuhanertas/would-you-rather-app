import { saveQuestionAnswer, saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function submitQuestion({ authedUser, qid, answer }) {
    return {
        type: SUBMIT_QUESTION,
        authedUser,
        qid,
        answer
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleSubmitQuestion(info) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const {qid, answer} = info
        const authedUserId = authedUser.id

        return saveQuestionAnswer({
            authedUser: authedUserId, 
            qid: qid, 
            answer: answer
        })
            .then( () => dispatch(submitQuestion({
                authedUser, 
                qid, 
                answer})))
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then( (question) => dispatch(addQuestion(question)))
    }
}