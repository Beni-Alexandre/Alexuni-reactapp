
import campuses from "../campuses";
import CampusCards from "./campuscards";


function createCampusCards(campuses) {
    return (
        <CampusCards
            key={campuses.id}
            name={campuses.name}
            img={campuses.img}
        />
    )
}

function Campus() {
    return (
        <div className="campus">
            <h1>Our Global Campus</h1>
            <p>Our University has branches all over the World.</p>
            <div className="row">
                {campuses.map(createCampusCards)}</div>
        </div>
    )
}
export default Campus;