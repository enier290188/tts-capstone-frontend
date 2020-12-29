import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import '@popperjs/core/dist/umd/popper.js'
import 'bootstrap/dist/js/bootstrap.js'
import {APP_URL, APP_HOME_URL, APP_ERROR_URL, APP_ERROR_404_URL} from '../url/AppUrl'
import HeaderLayout from '../layout/header/HeaderLayout'
import ContentLayout from '../layout/content/ContentLayout'
import FooterLayout from '../layout/footer/FooterLayout'
import HomeView from './home/HomeView'
import ErrorView from './error/ErrorView'

const AppView = () => {
    return (
        <BrowserRouter>
            <HeaderLayout/>
            <ContentLayout>
                <Switch>
                    <Route path={APP_URL} children={<Redirect from={APP_URL} to={APP_HOME_URL}/>} exact={true}/>
                    <Route path={APP_HOME_URL} children={<HomeView/>}/>
                    <Route path={APP_ERROR_URL} children={<ErrorView/>}/>
                    <Route path={"*"} children={<Redirect from={APP_URL} to={APP_ERROR_404_URL}/>}/>
                </Switch>
            </ContentLayout>
            <FooterLayout/>
        </BrowserRouter>
    )
}

export default AppView
