import React from "react";

function QuestionContainer({question}){
    return(
        <div className="questionContainer">
            <p className="question">{question}</p>
        </div>
    )
}

export default QuestionContainer