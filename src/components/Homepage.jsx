import React from "react";

function Homepage() {
    return (
        <div id='homepage'>
            <h1>Welcome to Dry Cleaners</h1>
            <section id='operatingHours'>
                <h2>Hours of Operation</h2>
                <div className="timeSection">
                    <h3>Monday-Friday:</h3>
                    <h3>8:00am - 6:00pm</h3>
                </div>
                <div className="timeSection">
                    <h3>Saturday:</h3>
                    <h3>9:00am - 1:00pm</h3>
                </div>
                <div className="timeSection">
                    <h3>Sunday:</h3>
                    <h3 id='closed'>Closed</h3>
                </div>
            </section>
        </div>
    )
}

export default Homepage;