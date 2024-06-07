import React from 'react'

export default function Alert(props) {
    const Capitalise= (text)=>{
          let newText = text[0].toUpperCase()+text.slice(1);
          return newText;
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} style={{fontSize :"22px",textAlign:"center"}} role="alert">
    <strong >{Capitalise(props.alert.type)}!  {props.alert.msg}</strong>
  </div>
  )
}
