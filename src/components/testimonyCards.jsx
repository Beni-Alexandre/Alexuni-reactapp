import React from "react";

function TestimonyCards(props) {
    return (
        <div className="testimonial-col">
            <img src={props.img} alt="" />
            <div>
                <p>
                    {props.testimony}
                </p>
                <h3>{props.name}</h3>

            </div>

        </div>

    )
}
export default TestimonyCards;