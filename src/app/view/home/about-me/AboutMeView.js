import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaFeather} from 'react-icons/all'
import {APP_HOME_ABOUTME_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import CenterLayout from '../../../layout/content/center/CenterLayout'

const AboutMe = () => {
    return (
        <CenterLayout icon={FaFeather} title={"About me"}>
            <p className="m-0 p-0">I’m a confident, punctual and reliable person. I can work within a team or on my own and offer any employer a friendly disposition. I consider myself a very positive person and I always try to share the joy with the people that surround me.</p>
        </CenterLayout>
    )
}

const AboutMeView = () => {
    return (
        <Switch>
            <Route path={APP_HOME_ABOUTME_URL} children={<AboutMe/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_HOME_ABOUTME_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default AboutMeView
