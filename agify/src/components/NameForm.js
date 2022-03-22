import { useState } from "react";

const countries = [
    {name: "France", iso: "FR"},
    {name: "États-unis", iso: "US"},
    {name: "Italy", iso: "IT"},
    {name: "Espagne", iso: "ES"},
]

function NameForm({formSubmitted}){

    const [name, setName] = useState('');
    const [country, setCountry] = useState('*');

    //Fonction qui gère l'envoi du formulaire 
    function nameFormSubmitted(event){
        event.preventDefault()

        // fonction qui remonte le name et le country dans le parent (App.js)
        formSubmitted(name, country);
        setName("");
        setCountry("*");
    }


    // Fonction qui m-a-j le state de name lorsqu'on modifie le input
    function changeName(event){ setName(event.target.value) }

    // Fonction qui m-a-j le state de country lorsqu'on modifie le input
    function changeCountry(event){  setCountry(event.target.value) }

    return(
        <form onSubmit={nameFormSubmitted}>
            <label htmlFor="name">Prénom:</label>
            <input type="text" id="name" value={name} onChange={changeName}/>
            <button type="submit">Estimer</button>
            <select name="countries" id="contry-select" value={country} onChange={changeCountry}>
                <option value="*">*</option>
                {
                    countries.map((country, index) => {
                        return <option key={index} value={country.iso}>{country.name}</option>
                    })
                }
            </select>
        </form>

    )
}

export default NameForm;