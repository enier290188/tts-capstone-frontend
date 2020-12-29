import React from 'react'
import {NavLink} from 'react-router-dom'
import {SiSpring, FaHome} from 'react-icons/all'
import {APP_URL, APP_HOME_URL} from '../../../url/AppUrl'
import LinkLayout from './_util_/nav/LinkLayout'

const CenterLayout = () => {
    const navbarTogglerRef = React.createRef()
    const navbarCollapseRef = React.createRef()

    const handleNavLinkOnClick = () => {
        if (navbarCollapseRef.current.classList.contains('show')) {
            navbarTogglerRef.current.click()
        }
    }

    return (
        <div className="col-12">
            <nav className="navbar navbar-dark navbar-expand-md m-0 p-0 bg-primary">
                <NavLink className={"navbar-brand m-0 me-2 p-0"} activeClassName={"active"} to={APP_URL} onClick={handleNavLinkOnClick}>
                    <SiSpring size={"48px"}/>{/*<span className="h2 m-0 ms-1 p-0 align-middle text-uppercase text-white text-decoration-none">TTS-CAPSTONE</span>*/}
                </NavLink>
                <button ref={navbarTogglerRef} className="navbar-toggler m-0 p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div ref={navbarCollapseRef} className="navbar-collapse m-0 p-0 collapse">
                    <div className="navbar-nav m-0 p-0">
                        <LinkLayout icon={FaHome} text={"Home"} to={APP_HOME_URL} onClick={handleNavLinkOnClick}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default CenterLayout
