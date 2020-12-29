import React from 'react'
import CenterLayout from './center/CenterLayout'

const FooterLayout = () => {
    return (
        <footer id="app-footer" className="m-0 p-0 border-top border-muted bg-white">
            <div className="container">
                <div className="row">
                    <CenterLayout/>
                </div>
            </div>
        </footer>
    )
}

export default FooterLayout
