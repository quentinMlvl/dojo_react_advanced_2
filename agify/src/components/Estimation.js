
function Estimation({agePrediction}){
    return(
        <section>
            <h2>Estimation</h2>
            {
                (agePrediction?.age) 
                ? <p>Âge estimé : {agePrediction.age} ans (sur {agePrediction.count} {agePrediction.name}
                    { (agePrediction.country_id) ? ` dans ${agePrediction.country_id}` : " dans le monde" })
                </p>
                : <p>No name or name not found in database</p>
            }
        </section>
    );
}

export default Estimation;