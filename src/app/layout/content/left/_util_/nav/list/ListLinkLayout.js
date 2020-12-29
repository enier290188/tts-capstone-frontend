import React from 'react'
import {NavLink} from 'react-router-dom'

const ListLinkLayout = (props) => {
    return (
        <NavLink className={"list-group-item list-group-item-action list-group-item-secondary d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={props.to}>
            {<props.icon size={"1em"}/>}<span className="h6 m-0 ms-1 p-0">{props.text}</span>
        </NavLink>
    )
}

export default ListLinkLayout
