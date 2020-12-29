import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaGlobe, FaFeather, FaLayerGroup} from 'react-icons/all'
import {APP_HOME_URL, APP_HOME_WELCOME_URL, APP_HOME_ABOUTME_URL, APP_HOME_RESUME_URL, APP_ERROR_404_URL} from '../../url/AppUrl'
import TopLayout from '../../layout/content/top/TopLayout'
import NavPillLayout from '../../layout/content/top/_util_/nav/NavPillLayout'
import NavPillLinkLayout from '../../layout/content/top/_util_/nav/NavPillLinkLayout'
import LeftLayout from '../../layout/content/left/LeftLayout'
import AvatarLayout from '../../layout/content/left/_util_/avatar/AvatarLayout'
import AvatarImageLayout from '../../layout/content/left/_util_/avatar/AvatarImageLayout'
import AvatarContentLayout from '../../layout/content/left/_util_/avatar/AvatarContentLayout'
import WelcomeView from './welcome/WelcomeView'
import AboutMeView from './about-me/AboutMeView'
import ResumeView from './resume/ResumeView'
import AvatarImage from '../../img/avatar.jpg'

const HomeView = () => {
    return (
        <React.Fragment>
            <TopLayout>
                <NavPillLayout>
                    <NavPillLinkLayout icon={FaGlobe} text={"Welcome"} to={APP_HOME_WELCOME_URL}/>
                    <NavPillLinkLayout icon={FaFeather} text={"About me"} to={APP_HOME_ABOUTME_URL}/>
                    <NavPillLinkLayout icon={FaLayerGroup} text={"Resume"} to={APP_HOME_RESUME_URL}/>
                </NavPillLayout>
            </TopLayout>
            <LeftLayout>
                <AvatarLayout>
                    <AvatarImageLayout src={AvatarImage}/>
                    <AvatarContentLayout>
                        <h5 className="m-0 p-0">{"Enier Ramos García"}</h5>
                    </AvatarContentLayout>
                </AvatarLayout>
            </LeftLayout>
            <Switch>
                <Route path={APP_HOME_URL} children={<Redirect from={APP_HOME_URL} to={APP_HOME_WELCOME_URL}/>} exact={true}/>
                <Route path={APP_HOME_WELCOME_URL} children={<WelcomeView/>}/>
                <Route path={APP_HOME_ABOUTME_URL} children={<AboutMeView/>}/>
                <Route path={APP_HOME_RESUME_URL} children={<ResumeView/>}/>
                <Route path={"*"} children={<Redirect from={APP_HOME_URL} to={APP_ERROR_404_URL}/>}/>
            </Switch>
        </React.Fragment>
    )
}

export default HomeView
