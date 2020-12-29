import React from 'react'

const ContentLayout = (props) => {
    return (
        <main id="app-content" className="m-0 mt-5 p-0 pb-3 bg-white">
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </main>
    )
}

export default ContentLayout
