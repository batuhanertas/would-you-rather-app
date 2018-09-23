import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'

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

export function handleSubmitQuestion(info) {
    console.log("debug")
    

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