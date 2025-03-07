import React from 'react'

export default function Alert(props) {
   
  return (
    props.alert && <div class="alert alert-success d-flex align-items-center" role="alert">
        <div style={{display: 'flex'}}>
            <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}:</strong> {props.alert.msg}
        </div>
    </div>
  )
}
