import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {FaPlus, FaMinus, FaCubes} from 'react-icons/all'

const TreeNodeLayout = (props) => {
    const navLinkRef = React.createRef()
    const collapseRef = React.createRef()
    const [isCollapseVisible, SetIsCollapseVisible] = useState(false)
    const iconSize = '1em'

    useEffect(() => {
    }, [isCollapseVisible])

    const toggleIsCollapseVisible = () => {
        SetIsCollapseVisible(!isCollapseVisible)
    }

    const handleNavLinkClick = (event) => {
        event.preventDefault()
        toggleIsCollapseVisible()
    }

    const navLinkIcon = isCollapseVisible ? <FaMinus size={iconSize} className={"m-0 me-3 p-0"}/> : <FaPlus size={iconSize} className={"m-0 me-3 p-0"}/>
    const collapseStyle = isCollapseVisible ? "d-block" : "d-none"

    return (
        <React.Fragment>
            <NavLink ref={navLinkRef} className={"btn btn-link m-0 p-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={props.to} onClick={handleNavLinkClick}>
                {navLinkIcon}<FaCubes size={iconSize} className={"m-0 p-0"}/><span className="h6 m-0 ms-1 p-0">{props.text}</span>
            </NavLink>
            <div ref={collapseRef} className={`m-0 ms-2 pt-0 pe-0 pb-0 ps-4 ${collapseStyle}`}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default TreeNodeLayout
