import React from "react"

export const Title = ({title}) =>{
    return(
        <div className='row'>
            <div className="col text center mb-3">
                <h1 className="display-4 text-capitalize font-weight-bold text-center">{title}</h1>
            </div>
        </div>
    )
}