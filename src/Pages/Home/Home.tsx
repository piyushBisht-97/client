import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/QuizContext";
import "./Home.css"

export default function Home(){

    const { dispatch} = useQuiz();
    const [name, setName] = useState("") 
    const navigate = useNavigate();

    return(
        <div className="home-layout">
            <h1>Quizzy 💡</h1>
            <p className="welcome-text">Hi there! welcome to Quizzy!<br/><br/>Enter your name below to get started</p>
            <input className="name-field-home" type="text" placeholder="name" onChange={(event)=>setName(event.target.value)}></input>
            <button className="home-btn" onClick={()=>{
                dispatch({type:"set_user", payload:{user:name}})
                navigate("/quizselect")
            }}>Enter</button>
        </div>
    );
}