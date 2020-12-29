import React from 'react'

const CenterLayout = (props) => {
    const centerLayout = props.isContainer ? (
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
        <div className="col-12 col-md">
            <h3 className="m-0 pt-3 pe-0 pb-1 ps-0 px-md-3 d-flex flex-row justify-content-start align-items-center border-bottom border-muted">
                {<props.icon/>}<span className="m-0 ms-1 p-0">{props.title}</span>
            </h3>
            {centerLayout}
        </div>
    )
}

export default CenterLayout
