import { useState } from 'react';
import './App.css';
import Pet from './Pet';

function App() {

  const [pets, setPets] = useState([
    { name: 'Tummy Rooters', fav_food: 'candies', birthday: '5/14/2020' },
    { name: 'Jeans Baltar Lil Boo Hammond', fav_food: 'Pastries, meats', birthday: '5/5/2002' },
    { name: 'Gustard', fav_food: 'Any', birthday: '?/2002' }
  ])

  return (
    <div className="App">
      {pets.map((pet) => {
        return <Pet
          key={pet.name}
          pet={pet}
          fav_food={pet.fav_food}
          birthday={pet.birthday}
        />
      })}
    </div>
  );
}

export default App;
