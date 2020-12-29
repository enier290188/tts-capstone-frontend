import React, {useState, useEffect} from 'react'
import {FaUserCircle} from 'react-icons/all'
import LoadingLayout from '../../../../_util_/loading/LoadingLayout'

const AvatarImageLayout = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [frameWidth, frameHeight, imageWidth, imageHeight] = ['175px', '175px', '160px', '160px']

    useEffect(() => {
    }, [isLoaded])

    const loadingLayout = props.src ? (
        !isLoaded ? (
            <LoadingLayout width={frameWidth} height={frameHeight}/>
        ) : null
    ) : null
    const imageLayout = props.src ? (
        <img src={props.src} width={imageWidth} height={imageHeight} className="m-0 p-0 border border-muted rounded bg-white" alt="" style={!isLoaded ? {display: 'none'} : null} onLoad={() => setIsLoaded(true)}/>
    ) : (
        <FaUserCircle size={imageWidth}/>
    )
    const borderStyle = props.src ? "muted" : "white"

    return (
        <div className="m-0 p-0 d-flex flex-row justify-content-center align-items-center">
            <div className={`m-0 p-0 d-flex flex-row justify-content-center align-items-center border border-${borderStyle} rounded bg-white`} style={{width: frameWidth, height: frameHeight}}>
                {loadingLayout}
                {imageLayout}
            </div>
        </div>
    )
}

export default AvatarImageLayout
