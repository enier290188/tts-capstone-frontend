import React, {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaLayerGroup} from 'react-icons/all'
import {APP_HOME_RESUME_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import CenterLayout from '../../../layout/content/center/CenterLayout'

const Resume = () => {
    useEffect(() => {
        console.log('***AppHomeResume')
    }, [])

    return (
        <CenterLayout icon={FaLayerGroup} title={"Resume"}>
            AppHomeResume
        </CenterLayout>
    )
}

const ResumeView = () => {
    return (
        <Switch>
            <Route path={APP_HOME_RESUME_URL} children={<Resume/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_HOME_RESUME_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default ResumeView
