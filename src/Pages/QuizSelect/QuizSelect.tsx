import { useQuiz } from "../../Context/QuizContext";
import "./QuizSelect.css"
import { quizOne, quizTwo } from "../../data/getQuiz";
import { Quiz } from "../../data/quizTypes";
import { useNavigate } from "react-router-dom";

export default function QuizSelect(){
    const {state, dispatch} = useQuiz();

    const navigate = useNavigate();

    function setQuiz(quiz:Quiz){
        dispatch({type:"set_Quiz",payload:{quiz:quiz}})
        navigate("/quiz")
    }

    return(
        <div className="quiz-select-layout">
            <p className="quiz-select-heading">
            Hi {state.user}<br/>
                Which quiz would you like to play? 
            </p>
            <ul className="quiz-list">
                <li onClick={()=>setQuiz(quizOne)} className="quiz-card meme-quiz">
                <img className="quiz-icon" src={quizOne.quizImg} alt=""/>
                
                <p className="quiz-title">{quizOne.quizName}</p>
               </li>
                <li onClick={()=>setQuiz(quizTwo)} className="quiz-card food-quiz">
                <img className="quiz-icon" src={quizTwo.quizImg} alt=""/>
                    <p className="quiz-title">{quizTwo.quizName}</p></li>
            </ul>
        </div>
    );
}