import React from 'react';
export default function NotFound(){
    return(
        <div className='position-relative' style = {{minHeight:'500px'}}>
            <h2 className="position-absolute text-secondary" style={{marginTop:'15rem', marginLeft:'40%'}}> 
            Oops! This page does not exist!
            </h2>
        </div>
    )
}