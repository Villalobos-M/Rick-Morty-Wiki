import React from 'react'
import '../styles/locationInfo.styles.css'
const LocationInfo = ({location}) => {
    return (
        <div className='card-location' >
            <h3> {location.name}</h3>
            <section>
                <p>Type: {location.type}</p>
                <p>Dimesion: {location.dimension} </p>
                <p>Population: {location.residents?.length} </p>
            </section>
            
        </div>
    )
}

export default LocationInfo
