import React from "react";
import courses from "../courses";
import CourseCards from "./coursecards";

function createCourseCards(courses) {
    return (
        <CourseCards
            key={courses.id}
            name={courses.name}
            desc={courses.desc}
        />
    )
}

function Courses() {
    return (
        < div className="course" id="course">
            <h1>Courses We Offer</h1>
            <p>These are some of the courses we offer.</p>

            <div className="row">
                {courses.map(createCourseCards)}

            </div>


        </div>
    )
}
export default Courses;