import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaExclamationTriangle} from 'react-icons/all'
import {APP_ERROR_403_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import CenterLayout from '../../../layout/content/center/CenterLayout'

const Error403 = () => {
    return (
        <CenterLayout icon={FaExclamationTriangle} title={"Error 403"}>
            <div className="alert alert-light m-0 px-3 py-5 text-center" role="alert">
                <h3 className="m-0 p-0">403</h3>
                <h4 className="m-0 p-0">Access forbidden</h4>
            </div>
        </CenterLayout>
    )
}

const Error403View = () => {
    return (
        <Switch>
            <Route path={APP_ERROR_403_URL} children={<Error403/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_ERROR_403_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default Error403View
