import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaSignOutAlt} from 'react-icons/all'
import {APP_SECURITY_PROFILE_LOGOUT_URL, APP_ERROR_404_URL} from '../../../../url/AppUrl'
import LoadingLayout from '../../../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../../../layout/content/center/CenterLayout'

const LogOut = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [isLoaded])

    return (
        <CenterLayout icon={FaSignOutAlt} title={"Log out"}>
            {
                isLoaded ? (
                    <React.Fragment>AppSecurityProfileLogOut</React.Fragment>
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
    )
}

const LogOutView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_PROFILE_LOGOUT_URL} children={<LogOut/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_PROFILE_LOGOUT_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default LogOutView
