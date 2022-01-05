import React, {useState} from 'react'
import axios from "axios";
//styles
import "../styles/searchBox.styles.css"

const SearchBox = ({setLocation}) => {
    const [id, setId] = useState("")

    const search =() =>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(res => setLocation(res.data))
    }
    return (
        <div>
            <input type="text" 
                    onChange={e => setId(e.target.value)}
                    value={id} />
            <button onClick={search} >search</button>
        </div>
    )
}
export default SearchBox
