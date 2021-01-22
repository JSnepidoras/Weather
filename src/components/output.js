import React from 'react'
import DG from '2gis-maps'
import Map from '2gis-maps'
import CircleMarker from '2gis-maps'
import Circle from '2gis-maps'

export default function Output(props) {
    const data = props.data
    return(
        <>
        {data? 
            <div className='Output'>
                
                <h2>{data.name+ ' ' + data.sys.country}</h2>
                <h3> {(data.main.temp - 273.15).toFixed(0)} </h3>
                <h3>{data.weather[0].main}</h3>
            </div>:null
        }
        </>
    )
}

