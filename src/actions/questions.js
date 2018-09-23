import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function submitQuestion(question) {
    return {
        type: SUBMIT_QUESTION,
        question
    }
}