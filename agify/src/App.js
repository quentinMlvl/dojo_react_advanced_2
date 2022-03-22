import { useState } from 'react';
import './App.css';
import Estimation from './components/Estimation';
import NameForm from './components/NameForm';

function App() {
  const [agePrediction, setAgePrediction] = useState(null);

  // Fonction qui est appelé lors du submit du form name
  function formSubmitted(name, country){

    // Création de l'uri de la requête  
    let uri = `https://api.agify.io?name=${name}`;
    if(country !== "*" && country.length !== 0) {
      uri += `&country_id=${country}`;
    }

    // Appel à l'api
    fetch(uri)
    .then(result => result.json())
    .then(response => {
      // m-a-j de l'état
      setAgePrediction(response);
    })
    
  }
  
  return (
    <div className="App">
      <h1>Estimation inutile : age en fonction du prénom</h1>
      <NameForm formSubmitted={formSubmitted}/>
      <Estimation agePrediction={agePrediction} />
    </div>
  );
}

export default App;