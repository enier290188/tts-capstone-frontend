import React from 'react'

const LoadingLayout = () => {
    return (
        <div className="m-0 p-0 d-flex flex-row justify-content-center align-items-center bg-transparent">
            <div className="spinner-border m-0 p-0 bg-transparent text-dark" role="status">
                <span className="visually-hidden m-0 p-0">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingLayout
