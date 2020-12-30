import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaSignOutAlt, FaUserCircle, FaUserEdit, FaUserLock} from 'react-icons/all'
import {APP_SECURITY_PROFILE_URL, APP_SECURITY_PROFILE_INFO_URL, APP_SECURITY_PROFILE_PASSWORD_URL, APP_SECURITY_PROFILE_AVATAR_URL, APP_SECURITY_PROFILE_LOGOUT_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import LeftLayout from '../../../layout/content/left/LeftLayout'
import AvatarLayout from '../../../layout/content/left/_util_/avatar/AvatarLayout'
import AvatarImageLayout from '../../../layout/content/left/_util_/avatar/AvatarImageLayout'
import AvatarContentLayout from '../../../layout/content/left/_util_/avatar/AvatarContentLayout'
import ListLayout from '../../../layout/content/left/_util_/nav/list/ListLayout'
import ListLinkLayout from '../../../layout/content/left/_util_/nav/list/ListLinkLayout'
import InfoView from './info/InfoView'
import PasswordView from './password/PasswordView'
import AvatarView from './avatar/AvatarView'
import LogOutView from './log-out/LogOutView'

const ProfileView = () => {
    return (
        <React.Fragment>
            <LeftLayout>
                <AvatarLayout>
                    <AvatarImageLayout/>
                    <AvatarContentLayout>
                        <h5 className="m-0 p-0">{"Enier Ramos García"}</h5>
                    </AvatarContentLayout>
                </AvatarLayout>
                <br/>
                <ListLayout>
                    <ListLinkLayout icon={FaUserEdit} text={"Info"} to={APP_SECURITY_PROFILE_INFO_URL}/>
                    <ListLinkLayout icon={FaUserLock} text={"Password"} to={APP_SECURITY_PROFILE_PASSWORD_URL}/>
                    <ListLinkLayout icon={FaUserCircle} text={"Avatar"} to={APP_SECURITY_PROFILE_AVATAR_URL}/>
                    <ListLinkLayout icon={FaSignOutAlt} text={"Log out"} to={APP_SECURITY_PROFILE_LOGOUT_URL}/>
                </ListLayout>
            </LeftLayout>
            <Switch>
                <Route path={APP_SECURITY_PROFILE_URL} children={<Redirect from={APP_SECURITY_PROFILE_URL} to={APP_SECURITY_PROFILE_INFO_URL}/>} exact={true}/>
                <Route path={APP_SECURITY_PROFILE_INFO_URL} children={<InfoView/>}/>
                <Route path={APP_SECURITY_PROFILE_PASSWORD_URL} children={<PasswordView/>}/>
                <Route path={APP_SECURITY_PROFILE_AVATAR_URL} children={<AvatarView/>}/>
                <Route path={APP_SECURITY_PROFILE_LOGOUT_URL} children={<LogOutView/>}/>
                <Route path={"*"} children={<Redirect from={APP_SECURITY_PROFILE_URL} to={APP_ERROR_404_URL}/>}/>
            </Switch>
        </React.Fragment>
    )
}

export default ProfileView
