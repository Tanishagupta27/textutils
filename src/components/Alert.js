import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        const a = word.toLowerCase()
        return a.charAt(0).toUpperCase()+a.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
      {props.a && <div className={`alert alert-${props.a.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.a.type)}: </strong>{props.a.msg}
</div>}
</div>
  )
}
