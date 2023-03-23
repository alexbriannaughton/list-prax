import './App.css';

function Pet( {pet, fav_food, birthday} ) {

    return(
        <div className="pet-div">
            <h1>{pet.name}</h1>
            <p>favorite food: {fav_food}</p>
            <p>DOB: {birthday}</p>
        </div>
    )
};

export default Pet;