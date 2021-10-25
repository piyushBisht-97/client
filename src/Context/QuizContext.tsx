import { useReducer, createContext, useContext } from "react";
import { quizOne } from "../data/getQuiz";
import { Quiz } from "../data/quizTypes";

export type InitialStateType = {
    score: number,
    questionNo: number,
    quizData: Quiz,
    user?:string
}

export type QuizContextData = {
    state: InitialStateType,
    dispatch: (action: ACTION) =>void
}

export type ACTION = 
|{type:"right", payload:{points:number}}
|{type:"wrong", payload:{points:number}}
|{type:"set_Quiz", payload:{quiz:Quiz}}
|{type:"set_user", payload:{user:string}}
|{type:"reset"}


export const intialStateReducer:InitialStateType = {
    score: 0,
    questionNo:1,
    quizData:quizOne,
    user:undefined
}

export const quizContextDefaultValue:QuizContextData = {
    state: intialStateReducer,
    dispatch: ()=>null
}

export const QuizContext = createContext<QuizContextData>(quizContextDefaultValue);

export const QuizProvider:React.FC = ({children})=>{

    const [state, dispatch] = useReducer(reducerFunc, intialStateReducer)

    return(
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    );
}

function reducerFunc(state:InitialStateType, action:ACTION){
    switch(action.type){
        case "right":
            return {...state, score: state.score+action.payload.points, questionNo: state.questionNo+1}
        case "wrong":
            return {...state, score: state.score-action.payload.points, questionNo: state.questionNo+1}
        case "set_user":
            return {...state, user:action.payload.user}    
        case "set_Quiz":
             return {...state, quizData: action.payload.quiz, score:0, questionNo:1}
        case "reset":
            return {...state,score:0, questionNo:1}
        default:
            return state
    }
}

export const useQuiz = () =>{
    return useContext(QuizContext);
}