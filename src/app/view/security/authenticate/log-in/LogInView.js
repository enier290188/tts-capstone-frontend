import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaSignInAlt} from 'react-icons/all'
import {APP_SECURITY_AUTHENTICATE_LOGIN_URL, APP_SECURITY_AUTHENTICATE_LOGIN_FORGOTPASSWORD_URL, APP_ERROR_404_URL} from '../../../../url/AppUrl'
import CenterLayout from '../../../../layout/content/center/CenterLayout'
import ForgotPasswordView from './forgot-password/ForgotPasswordView'

const LogIn = () => {
    return (
        <CenterLayout icon={FaSignInAlt} title={"Log in"}>
            AppSecurityAuthenticateLogIn
        </CenterLayout>
    )
}

const LogInView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_AUTHENTICATE_LOGIN_URL} children={<LogIn/>} exact={true}/>
            <Route path={APP_SECURITY_AUTHENTICATE_LOGIN_FORGOTPASSWORD_URL} children={<ForgotPasswordView/>}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_AUTHENTICATE_LOGIN_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default LogInView
