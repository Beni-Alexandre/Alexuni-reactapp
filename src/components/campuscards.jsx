import React from "react";

function CampusCards(props) {
    return (

        <div className="campus-col">
            <img src={props.img} alt="" />
            <div className="layer">
                <h3>{props.name}</h3>
            </div>
        </div>

    )
}
export default CampusCards;