import React, {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaGlobe} from 'react-icons/all'
import {APP_HOME_WELCOME_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import CenterLayout from '../../../layout/content/center/CenterLayout'

const Welcome = () => {
    useEffect(() => {
        console.log('***AppHomeWelcome')
    }, [])

    return (
        <CenterLayout icon={FaGlobe} title={"Welcome"}>
            AppHomeWelcome
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
