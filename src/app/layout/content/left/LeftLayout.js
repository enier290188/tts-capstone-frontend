import React from 'react'

const LeftLayout = (props) => {
    const leftLayout = props.isContainer ? (
        <div className="m-0 p-0">
            <div className="row">
                {props.children}
            </div>
        </div>
    ) : (
        <div className="m-0 pt-3 pe-0 pb-0 ps-0 px-md-3">
            {props.children}
        </div>
    )

    return (
        <div className="col-12 col-md-auto">
            <h3 className="m-0 pt-3 pe-0 pb-1 ps-0 px-md-3 d-none d-md-block d-md-flex flex-md-row justify-content-md-start align-items-md-center border-bottom border-white">
                &nbsp;
            </h3>
            {leftLayout}
        </div>
    )
}

export default LeftLayout
