import React from 'react'

const TopLayout = (props) => {
    const topLayout = props.isContainer ? (
        <div className="m-0 p-0">
            <div className="row">
                {props.children}
            </div>
        </div>
    ) : (
        <div className="m-0 p-0 pt-3">
            {props.children}
        </div>
    )

    return (
        <div className="col-12 col-md-12">
            {topLayout}
        </div>
    )
}

export default TopLayout
