
import { Header } from "../../Components/Header/Header";
// import { calculateScore } from "../../utils/score-keeper";
// import { quizOne } from "../../data/getQuiz";
import { Question, Option } from "../../data/quizTypes";
import { useQuiz } from "../../Context/QuizContext";
import "./QuizPage.css"
const buttonStyle = {display: "block", width:"100%", padding: "1rem", fontSize:"1.2rem"}


export default function QuizPage(){
   const {state, dispatch} = useQuiz();
   const quiz = state.quizData

   function calculateScore(question: Question, selectedOption: Option) {
    selectedOption.isRight?dispatch({type:"right", payload:{points: question.points}}):dispatch({type:"wrong",payload:{points:question.negativePoints}})
  }

    return(
        <div>
            <Header userName={state.user!==undefined?state.user:"Guest"} userScore={state.score}/>
            {state.questionNo>quiz.questions.length?"":<h2>Current Question: {state.questionNo}</h2>}
            {state.questionNo>quiz.questions.length?<p>You've completed the quiz!<br/><button onClick={()=>dispatch({type:"reset"})}>Reset!</button></p>:<div className="question-card">
                <p>{quiz?.questions[state.questionNo-1].question}</p>
                <ul className="answer-options">
                    {quiz?.questions[state.questionNo-1].options.map((option)=>{
                       return <li><button onClick={()=>calculateScore(quiz.questions[state.questionNo-1], option)} style={buttonStyle}>{option.text}</button></li>
                    })}
                </ul>
            </div>}
            
        </div>
    );
}