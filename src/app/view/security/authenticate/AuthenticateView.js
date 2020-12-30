import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaSignInAlt, FaUserPlus} from 'react-icons/all'
import {APP_SECURITY_AUTHENTICATE_URL, APP_SECURITY_AUTHENTICATE_LOGIN_URL, APP_SECURITY_AUTHENTICATE_SIGNUP_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import TopLayout from '../../../layout/content/top/TopLayout'
import NavPillLayout from '../../../layout/content/top/_util_/nav/NavPillLayout'
import NavPillLinkLayout from '../../../layout/content/top/_util_/nav/NavPillLinkLayout'
import LogInView from './log-in/LogInView'
import SignUpView from './sign-up/SignUpView'

const AuthenticateView = () => {
    return (
        <React.Fragment>
            <TopLayout>
                <NavPillLayout>
                    <NavPillLinkLayout icon={FaSignInAlt} text={"Log in"} to={APP_SECURITY_AUTHENTICATE_LOGIN_URL}/>
                    <NavPillLinkLayout icon={FaUserPlus} text={"Sign up"} to={APP_SECURITY_AUTHENTICATE_SIGNUP_URL}/>
                </NavPillLayout>
            </TopLayout>
            <Switch>
                <Route path={APP_SECURITY_AUTHENTICATE_URL} children={<Redirect from={APP_SECURITY_AUTHENTICATE_URL} to={APP_SECURITY_AUTHENTICATE_LOGIN_URL}/>} exact={true}/>
                <Route path={APP_SECURITY_AUTHENTICATE_LOGIN_URL} children={<LogInView/>}/>
                <Route path={APP_SECURITY_AUTHENTICATE_SIGNUP_URL} children={<SignUpView/>}/>
                <Route path={"*"} children={<Redirect from={APP_SECURITY_AUTHENTICATE_URL} to={APP_ERROR_404_URL}/>}/>
            </Switch>
        </React.Fragment>
    )
}

export default AuthenticateView
