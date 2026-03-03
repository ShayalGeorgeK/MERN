import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState("#ffffff");

    function handleColorChange(event){
        setColor(event.target.value);
    }

  return (
    <div className='color-picker-container' >
        <h1>ColorPicker</h1>
        <div className="color-display" style={{background:color}}>
            <p>Selected Color : {color} </p>
        </div>
        <label>Select a Color : </label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker