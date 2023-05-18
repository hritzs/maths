import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup_inner'>
            <button className='close_btn' onClick={()=>props.setTrigger(false)}>X</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup
