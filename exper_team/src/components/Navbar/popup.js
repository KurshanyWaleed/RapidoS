import React from 'react'
import './popup.style.css'
function Popup(props) {

    return (
        <div className='bubble'>
            {props.children}
        </div>
    )
}

export default Popup
