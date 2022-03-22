function CatBreed({ breed }){
    return(
        <div>
            <h2>{breed.breed}</h2>
            <p>Pays : {(breed.country) || "Iconnu"}</p>
            <p>Poil : {(breed.coat) || "Iconnu"}</p>
            <p>Origine : {(breed.origin) || "Iconnu"}</p>
            <p>Pattern : {(breed.pattern) || "iconnu"}</p>
        </div>
    )
}

export default CatBreed;