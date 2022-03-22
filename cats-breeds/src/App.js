import { useEffect, useState } from 'react';
import './App.css';
import CatBreed from './components/CatBreed';

function App() {
  /* State */
  const [ breeds, setBreeds ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ pagesNumber, setPagesNumber ] = useState(1);

  /* UseEffect */
  useEffect(() => {
    fetch("https://catfact.ninja/breeds")
    .then(r => r.json())
    .then(r => {
      setBreeds(r.data);
      setCurrentPage(r.current_page);
      setPagesNumber(Math.ceil(r.total/r.to));
    });
  }, []);

  useEffect(() => {
    fetch(`https://catfact.ninja/breeds?page=${currentPage}`)
    .then(r => r.json())
    .then(r => {
      setBreeds(r.data);
      setCurrentPage(r.current_page); 
    });
  }, [currentPage])


  /* Functions */
  function getPaginationsButtons(){

    // Create Previous button
    const paginationsButtons = [
      <button disabled={(currentPage === 1)} onClick={() => setCurrentPage(currentPage-1) }>Page précédente</button>
    ];

    // Create Pages button
    for (let i = 1; i <= pagesNumber; i++) {
      paginationsButtons.push(
        <button key={i} disabled={(currentPage === i)} onClick={ () => setCurrentPage(i) }>{i}</button>
      )    
    }

    // Create Next button
    paginationsButtons.push(
      <button disabled={(currentPage === pagesNumber)} onClick={() => setCurrentPage(currentPage+1)}>Page suivante</button>
    );
    return paginationsButtons;
  }

  return (
    <div className="App">
      <h1>Liste des races de chats</h1>
      Page : { currentPage }
      
      <section>
        {
          (breeds?.length) 
          ? breeds.map((breed, index) => {
            return <CatBreed breed={breed} key={index}/>
          }) 
          : <h2>Waiting for API ...</h2>
        }
      </section>

      <section>
        <div>
          
          {
            getPaginationsButtons().map(button => button)
          }
          
        </div>
      </section>
    </div>
  );
}

export default App;
