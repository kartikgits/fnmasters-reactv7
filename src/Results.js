import Pet from "./Pet";

// Only a JS expression goes inside {}
// An expression in JS is whatever you can put into RHS of an =

const Results = ({pets}) => {
    return (
        <div>
            {!pets.length ? (
                    <h1>No Pets Found</h1>
                ) : (
                    pets.map(pet => (
                        <Pet 
                            name={pet.name} 
                            animal={pet.animal} 
                            breed={pet.breed} 
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            id={pet.id}
                            key={pet.id}
                        />
                    ))
                )
            }
        </div>
    );
};

export default Results;