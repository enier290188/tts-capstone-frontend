import React from 'react'
import {FaRegCopyright, SiSpring} from 'react-icons/all'

const CenterLayout = () => {
    return (
        <div className="col-12">
            <p className="m-0 px-0 py-3 px-md-3 d-flex flex-row justify-content-center align-items-center text-muted">
                <span>Copyright</span><FaRegCopyright size={"1em"} className={"mx-1 my-0 p-0"}/><span>2020,</span><SiSpring size={"1em"} className={"mx-1 my-0 p-0"}/><span>TTS-CAPSTONE</span>
            </p>
        </div>
    )
}

export default CenterLayout
