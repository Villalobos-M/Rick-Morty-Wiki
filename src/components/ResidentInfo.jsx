import React, {useEffect, useState} from 'react';
import axios from 'axios';
//stylrs
import "../styles/residentInfo.styles.css"
const ResidentInfo = (resident) => {

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(resident.resident)
         .then(result => setCharacter(result.data))
    }, [resident.resident])
    
    return (
        <div className='card-resident' >
            
            <div className='container-img' >
                <img src={character.image} alt="" />
            </div>
            <div className='container-info' >
                <h3>{character.name}</h3>
                <article>
                    <p>Status: {character.status}</p>
                    <p>Origin: {character.origin?.name} </p>
                    <p>Episode where apear: {character.episode?.length}</p>
                </article>
            </div>
        </div>
    )
}

export default ResidentInfo
