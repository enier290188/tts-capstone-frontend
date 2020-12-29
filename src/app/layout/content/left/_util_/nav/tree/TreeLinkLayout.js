import React from 'react'
import {NavLink} from 'react-router-dom'

const TreeLinkLayout = (props) => {
    return (
        <NavLink className={"d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={props.to}>
            {<props.icon size={"1em"}/>}<span className="h6 m-0 ms-1 p-0">{props.text}</span>
        </NavLink>
    )
}

export default TreeLinkLayout
