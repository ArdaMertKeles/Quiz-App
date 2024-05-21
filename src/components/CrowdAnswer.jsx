import React from "react";

function CrowdAnswer({ aAnswer, bAnswer, cAnswer, dAnswer }) {

    return (
        <div id="crowdAnswer" className="crowdAnswerWrapper">
            <div className="percentages">
                <p>{aAnswer}</p>
                <p>{bAnswer}</p>
                <p>{cAnswer}</p>
                <p>{dAnswer}</p>
            </div>
            <div className="columns">
                <div id="aColumn" className="column">

                </div>
                <div id="bColumn" className="column">

                </div>
                <div id="cColumn" className="column">

                </div>
                <div id="dColumn" className="column">

                </div>
            </div>
            <div className="answers">
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
            </div>
        </div>
    )
}

export default CrowdAnswer