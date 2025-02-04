import React from "react";
function CourseCards(props) {
    return (

        <div className="course-col">

            <h3>{props.name}</h3>
            <p>
                {props.desc}
            </p>
        </div>

    )
}
export default CourseCards;