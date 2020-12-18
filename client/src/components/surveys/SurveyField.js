// logic to render label and css
import React from 'react'

// pass input and label
export default({ input, label,meta : {touched,error}}) => {
    
    
    return (
        <div>
            <label>{ label }</label>
            <input {...input} style = {{marginBottom : '5px'}}/>
            <div className="red-text" style = {{marginBottom : '20px'}}>
                {touched && error}
            </div>
            
        </div>
    )
}