import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaUserCircle} from 'react-icons/all'
import {APP_SECURITY_PROFILE_AVATAR_URL, APP_ERROR_404_URL} from '../../../../url/AppUrl'
import LoadingLayout from '../../../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../../../layout/content/center/CenterLayout'

const Avatar = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [isLoaded])

    return (
        <CenterLayout icon={FaUserCircle} title={"Avatar"}>
            {
                isLoaded ? (
                    <React.Fragment>AppSecurityProfileAvatar</React.Fragment>
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
    )
}

const AvatarView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_PROFILE_AVATAR_URL} children={<Avatar/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_PROFILE_AVATAR_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default AvatarView
