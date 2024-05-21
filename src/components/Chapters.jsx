import React from "react";

function Chapters({easyIndex, mediumIndex, interIndex, expertIndex, chapter}){
    return(
        <div className="chaptersWrapper">
            <div className="chapters">
            <div className="chapterContainer">
                Easy
                <div>
                    {easyIndex} / 7
                </div>
            </div>
            <div className="chapterContainer">
                Medium
                <div>
                {mediumIndex} / 5
                </div>
            </div>
            <div className="chapterContainer">
                Intermadiate
                <div>
                {interIndex} / 3
                </div>
            </div>
            <div className="chapterContainer">
                Expert
                <div>
                {expertIndex} / 1
                </div>
            </div>
            </div>
            <div className="chapterLevel">
                Chapter Level: {chapter}
            </div>
        </div>       
    )
}

export default Chapters