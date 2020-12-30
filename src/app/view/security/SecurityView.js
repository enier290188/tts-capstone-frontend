import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {APP_SECURITY_URL, APP_SECURITY_AUTHENTICATE_URL, APP_SECURITY_PROFILE_URL, APP_ERROR_404_URL} from '../../url/AppUrl'
import AuthenticateView from './authenticate/AuthenticateView'
import ProfileView from './profile/ProfileView'

const SecurityView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_AUTHENTICATE_URL} children={<AuthenticateView/>}/>
            <Route path={APP_SECURITY_PROFILE_URL} children={<ProfileView/>}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default SecurityView
