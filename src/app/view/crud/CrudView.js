import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaUserTie} from 'react-icons/all'
import {APP_CRUD_URL, APP_CRUD_EMPLOYEE_URL, APP_ERROR_404_URL} from '../../url/AppUrl'
import TopLayout from '../../layout/content/top/TopLayout'
import NavPillLayout from '../../layout/content/top/_util_/nav/NavPillLayout'
import NavPillLinkLayout from '../../layout/content/top/_util_/nav/NavPillLinkLayout'
import EmployeeView from './employee/EmployeeView'

const CrudView = () => {
    return (
        <React.Fragment>
            <TopLayout>
                <NavPillLayout>
                    <NavPillLinkLayout icon={FaUserTie} text={"Employee"} to={APP_CRUD_EMPLOYEE_URL}/>
                </NavPillLayout>
            </TopLayout>
            <Switch>
                <Route path={APP_CRUD_URL} children={<Redirect from={APP_CRUD_URL} to={APP_CRUD_EMPLOYEE_URL}/>} exact={true}/>
                <Route path={APP_CRUD_EMPLOYEE_URL} children={<EmployeeView/>}/>
                <Route path={"*"} children={<Redirect from={APP_CRUD_URL} to={APP_ERROR_404_URL}/>}/>
            </Switch>
        </React.Fragment>
    )
}

export default CrudView
