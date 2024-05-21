import React, { useState } from "react";

function TimeBar({date}){

    return(
        <div className="timeBarContainer">
            <div id="absolute" className="absolute"></div>
            <div className="timeBar"></div>
            <div className="time">
                <p>{date}</p>
            </div>
        </div>
    )
}

export default TimeBar