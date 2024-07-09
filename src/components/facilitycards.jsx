import React from "react";

function FacilityCards(props) {
    return (

        <div className="facilities-col">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>


        </div>

    )
}
export default FacilityCards;