import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaLockOpen} from 'react-icons/all'
import {APP_SECURITY_AUTHENTICATE_LOGIN_FORGOTPASSWORD_URL, APP_ERROR_404_URL} from '../../../../../url/AppUrl'
import CenterLayout from '../../../../../layout/content/center/CenterLayout'

const ForgotPassword = () => {
    return (
        <CenterLayout icon={FaLockOpen} title={"Forgot password"}>
            AppSecurityAuthenticateLogInForgotPassword
        </CenterLayout>
    )
}

const ForgotPasswordView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_AUTHENTICATE_LOGIN_FORGOTPASSWORD_URL} children={<ForgotPassword/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_AUTHENTICATE_LOGIN_FORGOTPASSWORD_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default ForgotPasswordView
