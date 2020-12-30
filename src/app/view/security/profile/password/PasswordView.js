import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaUserLock} from 'react-icons/all'
import {APP_SECURITY_PROFILE_PASSWORD_URL, APP_ERROR_404_URL} from '../../../../url/AppUrl'
import LoadingLayout from '../../../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../../../layout/content/center/CenterLayout'

const Password = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [isLoaded])

    return (
        <CenterLayout icon={FaUserLock} title={"Password"}>
            {
                isLoaded ? (
                    <React.Fragment>AppSecurityProfilePassword</React.Fragment>
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
    )
}

const PasswordView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_PROFILE_PASSWORD_URL} children={<Password/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_PROFILE_PASSWORD_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default PasswordView
