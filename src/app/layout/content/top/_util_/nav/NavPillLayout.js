import React from 'react'

const NavPillLayout = (props) => {
    return (
        <nav className="nav nav-pills m-0 p-0 d-flex flex-column justify-content-center align-content-center flex-md-row justify-content-md-start align-content-md-stretch">
            {props.children}
        </nav>
    )
}

export default NavPillLayout
