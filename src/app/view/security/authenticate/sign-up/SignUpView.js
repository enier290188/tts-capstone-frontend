import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaUserPlus} from 'react-icons/all'
import {APP_SECURITY_AUTHENTICATE_SIGNUP_URL, APP_ERROR_404_URL} from '../../../../url/AppUrl'
import CenterLayout from '../../../../layout/content/center/CenterLayout'

const SignUp = () => {
    return (
        <CenterLayout icon={FaUserPlus} title={"Sign up"}>
            AppSecurityAuthenticateSignUp
        </CenterLayout>
    )
}

const SignUpView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_AUTHENTICATE_SIGNUP_URL} children={<SignUp/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_AUTHENTICATE_SIGNUP_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default SignUpView
