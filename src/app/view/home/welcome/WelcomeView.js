import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaGlobe, FaFacebook, FaLinkedin, FaGithub} from 'react-icons/all'
import {APP_HOME_WELCOME_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import CenterLayout from '../../../layout/content/center/CenterLayout'

const Welcome = () => {
    return (
        <CenterLayout icon={FaGlobe} title={"Welcome"}>
            <div className="alert alert-primary m-0 p-5 text-center" role="alert">
                <h1 className="m-0 p-0">I'm Enier Ramos García</h1>
                <p className="m-0 mt-3 p-0 lead">I want my job to make me feel useful in society, that it is not just a job, but also to know that what I do it is important for someone else in their life or their job, no matter how many people benefit from it. I want to feel what I do is meaningful.</p>
            </div>
            <div className="m-0 mt-3 p-0 text-center">
                <a className="btn btn-link m-0 mx-3 p-0" href="https://www.facebook.com/enier290188/" title="Facebook" role="button" rel="noreferrer" target="_blank">
                    <FaFacebook size="48px"/>
                </a>
                <a className="btn btn-link m-0 mx-3 p-0" href="https://www.linkedin.com/in/enier290188/" title="LinkedIn" role="button" rel="noreferrer" target="_blank">
                    <FaLinkedin size="48px"/>
                </a>
                <a className="btn btn-link m-0 mx-3 p-0" href="https://github.com/enier290188/" title="Github" role="button" rel="noreferrer" target="_blank">
                    <FaGithub size="48px"/>
                </a>
            </div>
        </CenterLayout>
    )
}

const WelcomeView = () => {
    return (
        <Switch>
            <Route path={APP_HOME_WELCOME_URL} children={<Welcome/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_HOME_WELCOME_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default WelcomeView
