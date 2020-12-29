import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaExclamationTriangle} from 'react-icons/all'
import {APP_ERROR_404_URL} from '../../../url/AppUrl'
import CenterLayout from '../../../layout/content/center/CenterLayout'

const Error404 = () => {
    return (
        <CenterLayout icon={FaExclamationTriangle} title={"Error 404"}>
            <div className="alert alert-light m-0 px-3 py-5 text-center" role="alert">
                <h3 className="m-0 p-0">404</h3>
                <h4 className="m-0 p-0">Page not found</h4>
            </div>
        </CenterLayout>
    )
}

const Error404View = () => {
    return (
        <Switch>
            <Route path={APP_ERROR_404_URL} children={<Error404/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_ERROR_404_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default Error404View
