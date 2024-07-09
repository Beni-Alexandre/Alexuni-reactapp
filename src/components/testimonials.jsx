import React from "react";
import testimonials from "../testimonials";
import TestimonyCards from "./testimonyCards";

function createTestimonyCards(testimonials) {
    return (
        <TestimonyCards
            key={testimonials.id}
            name={testimonials.name}
            testimony={testimonials.testimony}
            img={testimonials.img}

        />
    )
}

function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>What Our Student Says</h1>
            <p>Testimony from our Studens.</p>
            <div className="row">
                {testimonials.map(createTestimonyCards)}
            </div>
        </div>

    )
}
export default Testimonials;