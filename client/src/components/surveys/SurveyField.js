// logic to render label and css
import React from 'react'

// pass input and label
export default({ input, label }) => {
    
    
    return (
        <div>
            <label>{ label }</label>
            <input {...input}/>
        </div>
    )
}