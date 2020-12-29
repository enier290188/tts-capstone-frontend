import React from 'react'
import CenterLayout from './center/CenterLayout'

const HeaderLayout = () => {
    return (
        <header id="app-header" className="m-0 p-0 fixed-top bg-primary">
            <div className="container">
                <div className="row">
                    <CenterLayout/>
                </div>
            </div>
        </header>
    )
}

export default HeaderLayout
