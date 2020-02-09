import React, { useState } from 'react';

const InputComponent = (props) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)

    }
    let showtext = true;
    function setShowText(text){
        
    
    
    
    return (
        <div className='w-100'>
            <input value={text} onChange={handleChange}/>
            <br></br>
            <p>{text}</p>
            <button onClick>HIDE</button>
        </div>
    )
}


export default InputComponent;