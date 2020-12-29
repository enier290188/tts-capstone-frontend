import React, {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaFeather} from 'react-icons/all'
import {APP_HOME_ABOUTME_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import CenterLayout from '../../../layout/content/center/CenterLayout'

const AboutMe = () => {
    useEffect(() => {
        console.log('***AppHomeAboutMe')
    }, [])

    return (
        <CenterLayout icon={FaFeather} title={"About me"}>
            AppHomeAboutMe
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
