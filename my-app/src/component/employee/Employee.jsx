import React from 'react'

function Employee(props) {
  return (
    <div>
        <h1>Employee {props.name}</h1>
        <h3>{props.role ? (props.role) : ("No role")}</h3>
    </div>
  )
}

export default Employee