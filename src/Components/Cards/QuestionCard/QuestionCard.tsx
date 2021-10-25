import { Option, Question } from "../../../data/quizTypes";

const buttonStyle = {display: "block", width:"100%", padding: "1rem", fontSize:"1.2rem"}

type QuestionCardProps = {
    question: string,
    options: Option[],
    optionHandler: ()=>null,
}

export default function QuestionCard({question, options, optionHandler}:QuestionCardProps){
    return(
        <div className="question-card">
                <p>{question}</p>
                <ul className="answer-options">
                    {options.map((option)=>{
                       return <li><button onClick={()=>optionHandler()} style={buttonStyle}>{option.text}</button></li>
                    })}
                </ul>
            </div>
    );
}