import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {APP_ERROR_URL, APP_ERROR_403_URL, APP_ERROR_404_URL} from '../../url/AppUrl'
import Error403View from './403/Error403View'
import Error404View from './404/Error404View'

const ErrorView = () => {
    return (
        <Switch>
            <Route path={APP_ERROR_403_URL} children={<Error403View/>}/>
            <Route path={APP_ERROR_404_URL} children={<Error404View/>}/>
            <Route path={"*"} children={<Redirect from={APP_ERROR_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default ErrorView
