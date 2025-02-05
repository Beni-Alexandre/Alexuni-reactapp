

import facilities from "../facilities";
import FacilityCards from "./facilitycards";

function createFacilitiesCards(facilities) {
    return (
        <FacilityCards
            key={facilities.id}
            name={facilities.name}
            img={facilities.img}
            desc={facilities.desc}
        />
    )
}


function Facility() {
    return (

        <div className="facilities" id="facilities">
            <h1>Our Facilities</h1>
            <p>These are some facilities on our campus.</p>
            <div className="row">
                {facilities.map(createFacilitiesCards)}
            </div>
        </div>
    )
}
export default Facility;