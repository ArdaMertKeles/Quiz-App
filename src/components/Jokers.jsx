import React from "react";


function Jokers({ halfClick, crowdClick, hourClick, passClick, halfDisabled, crowdDisabled, passDisabled, hourDisabled }) {




    return (
        <div className="jokersWrapper">
            <div className="joker">
                <button className="halfJoker" onClick={halfClick} disabled={halfDisabled}>
                    <p>50:50</p>
                </button>
            </div>
            <div className="joker">
                <button className="crowdJoker" onClick={crowdClick} disabled={crowdDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                        <path d="M 12 2 C 9 2 6 4 6 8 L 6 8.3515625 C 4.8227084 8.9164282 4 10.11143 4 11.5 C 4 12.479015 4.4084878 13.36362 5.0605469 14 L 5 14 A 1.0001 1.0001 0 1 0 5 16 L 6.0605469 16 C 5.4084878 16.63638 5 17.520985 5 18.5 L 5 20 L 6.1015625 20 C 6.3548881 21.681402 7.7500624 23 9.5 23 L 11 23 L 18 23 L 18 17 C 18.55 17 19.050156 16.780156 19.410156 16.410156 C 19.780156 16.050156 20 15.55 20 15 C 20 14.45 19.780156 13.949844 19.410156 13.589844 C 19.050156 13.219844 18.55 13 18 13 L 18 8 C 18 4 15 2 12 2 z M 7.5 9 C 7.6908489 9 7.8759845 9.0254664 8.0546875 9.0664062 C 8.096021 9.0757511 8.1352803 9.0902007 8.1757812 9.1015625 C 8.312025 9.1402573 8.4427085 9.1897947 8.5683594 9.25 C 8.6090884 9.2693795 8.6499748 9.2871031 8.6894531 9.3085938 C 8.6993172 9.3139987 8.7070151 9.3225916 8.7167969 9.328125 C 8.2436815 9.9601224 8 10.72853 8 11.5 C 8 12.272878 8.2438784 13.043161 8.71875 13.675781 C 8.3579191 13.878501 7.9460208 14 7.5 14 C 6.113167 14 5 12.886833 5 11.5 C 5 11.408287 5.0178499 11.321499 5.0273438 11.232422 A 1 1 0 0 0 6 12 A 1 1 0 0 0 6 10 A 1 1 0 0 0 5.3496094 10.240234 C 5.5263499 9.9378174 5.7596728 9.6760635 6.0429688 9.4726562 C 6.0976618 9.4331092 6.15634 9.3984791 6.2148438 9.3632812 C 6.2827505 9.3225313 6.3518691 9.2842804 6.4238281 9.25 C 6.4851113 9.2207763 6.5472084 9.1923484 6.6113281 9.1679688 C 6.6941602 9.1366306 6.780339 9.1124056 6.8671875 9.0898438 C 6.9261535 9.0743383 6.9844297 9.0561893 7.0449219 9.0449219 C 7.1927356 9.0179715 7.3440742 9 7.5 9 z M 11.5 9 C 12.88 9 14 10.12 14 11.5 C 14 12.88 12.88 14 11.5 14 C 10.68 14 9.96 13.61 9.5 13 C 9.4930205 13.009306 9.4836753 13.016218 9.4765625 13.025391 C 9.1698869 12.590619 9 12.051726 9 11.5 C 9 10.950708 9.1686214 10.414303 9.4726562 9.9804688 C 9.4807877 9.9911231 9.4920426 9.9989789 9.5 10.009766 C 9.95 9.3997656 10.68 9 11.5 9 z M 11 10 A 1 1 0 0 0 11 12 A 1 1 0 0 0 11 10 z M 8.5 16 L 9 16 L 11 16 C 12.386833 16 13.5 17.113167 13.5 18.5 L 13.5 19.5 C 13.5 20.886833 12.386833 22 11 22 L 9.5 22 C 8.3091862 22 7.4628298 21.109986 7.2070312 20 L 11 20 L 11 19 L 6 19 L 6 18.5 C 6 17.113167 7.113167 16 8.5 16 z"></path>
                    </svg>
                </button>
            </div>
            <div className="joker">
                <button className="phoneJoker" onClick={hourClick} disabled={hourDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
                        <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                    </svg></button>
            </div>
            <div className="joker">
                <button className="passJoker" onClick={passClick} disabled={passDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 24 24">
                        <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 13.85307 19.369262 15.55056 18.318359 16.904297 L 7.0957031 5.6816406 C 8.4494397 4.6307377 10.14693 4 12 4 z M 5.6816406 7.0957031 L 16.904297 18.318359 C 15.55056 19.369262 13.85307 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 10.14693 4.6307377 8.4494397 5.6816406 7.0957031 z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Jokers