import React, { useRef, useState } from "react";

function AnswerContainer({ answer1, answer2, answer3, answer4, answer, correctAnswer, restartMenu, lock, setLock, correctSound, loseSound }) {
    
    const [nextLock,setNextLock] = useState(true)

    let Option1 = useRef(null) 
    let Option2 = useRef(null) 
    let Option3 = useRef(null) 
    let Option4 = useRef(null) 

    let option_array = [Option1,Option2,Option3,Option4]

    const checkAns = (e, ans) => {
        if(lock === false){
            if (answer === ans) {
                e.target.className = 'correct';
                setLock(true);
                setNextLock(false)
                correctSound()
            } else {
                e.target.className = 'wrong';
                setLock(true)
                option_array[answer-1].current.className = 'correct';
                restartMenu();
                loseSound()
            }
        }
    }

    const clearClass = () =>{
        option_array.map((option) =>{
            option.current.className = 'answerContainer'
        })
        setLock(false)
    }

    const Next = ()=>{
        clearClass();
        correctAnswer();
        setNextLock(true)
    }

    return (
        <div className="answerWrapper">
            <div ref={Option1} onClick={(e) => { checkAns(e, 1) }} id="ans1" className="answerContainer">
                A)
                    {answer1}
            </div>
            <div ref={Option2} onClick={(e) => { checkAns(e, 2) }} id="ans2" className="answerContainer">
                B)
                    {answer2}
            </div>
            <div ref={Option3} onClick={(e) => { checkAns(e, 3) }} id="ans3" className="answerContainer">
                C) 
                {answer3}
            </div>
            <div ref={Option4} onClick={(e) => { checkAns(e, 4) }} id="ans4" className="answerContainer">
               D)
                {answer4}
            </div>
            <button className="nextBtn" disabled={nextLock} onClick={Next} >Next</button>
        </div>
    )
}

export default AnswerContainer