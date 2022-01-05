import React from 'react'
import ResidentInfo from './ResidentInfo'
import "../styles/residentInfo.styles.css"

const ResidentsList = ({residents}) => {
    return (
        <div className='list-card'>
            {
                residents?.map(resident => <ResidentInfo resident={resident} key={resident}/> )
            }
        </div >
    )
}
export default ResidentsList
