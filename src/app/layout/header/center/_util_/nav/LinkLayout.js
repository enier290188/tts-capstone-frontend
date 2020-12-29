import React from 'react'
import {NavLink} from 'react-router-dom'

const LinkLayout = (props) => {
    return (
        <NavLink className={"nav-link m-0 p-3 p-md-2 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={props.to} onClick={props.onClick}>
            {<props.icon size={"24px"}/>}<span className="h6 m-0 ms-1 p-0">{props.text}</span>
        </NavLink>
    )
}

export default LinkLayout
