import React from 'react'

const ListLayout = (props) => {
    return (
        <div className="list-group m-0 p-0">
            {props.children}
        </div>
    )
}

export default ListLayout
