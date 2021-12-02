import { HeaderProps } from "./HeaderProps.types";

export function Header({userScore=0, userName="Hi There!"}:HeaderProps){

    return(
        <header>
            
            <h1>Quizzy 💡</h1>
            <div className="user-details">
                <p>Welcome {userName}!</p>
                <p>score: {userScore}</p>
            </div>
        </header>
    );
}