import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaUserEdit} from 'react-icons/all'
import {APP_SECURITY_PROFILE_INFO_URL, APP_ERROR_404_URL} from '../../../../url/AppUrl'
import LoadingLayout from '../../../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../../../layout/content/center/CenterLayout'

const Info = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [isLoaded])

    return (
        <CenterLayout icon={FaUserEdit} title={"Info"}>
            {
                isLoaded ? (
                    <React.Fragment>AppSecurityProfileInfo</React.Fragment>
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
    )
}

const InfoView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_PROFILE_INFO_URL} children={<Info/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_PROFILE_INFO_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default InfoView
