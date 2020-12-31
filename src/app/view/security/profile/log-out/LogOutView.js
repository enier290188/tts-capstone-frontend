import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {useHistory} from 'react-router-dom'
import {FaSync, FaSignOutAlt} from 'react-icons/all'
import {APP_URL, APP_SECURITY_PROFILE_LOGOUT_URL, APP_ERROR_404_URL} from '../../../../url/AppUrl'
import LoadingLayout from '../../../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../../../layout/content/center/CenterLayout'

// Frontend. Reset.
const RESET_TEXT = 'Reset'
const RESET_ICON = FaSync
const RESET_ICON_SIZE = '1em'
// Frontend. Submit.
const SUBMIT_TEXT = 'Log out'
const SUBMIT_ICON = FaSignOutAlt
const SUBMIT_ICON_SIZE = '1em'

const LogOut = () => {
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const submitAction = () => {
        setSuccess({message: `You have successfully logged out.`})
        setTimeout(() => {
            history.push(APP_URL)
        }, 3000)
    }

    const resetAction = () => {
        setIsLoaded(true)
        setSuccess(null)
        setError(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await submitAction()
    }
    const handleReset = async (event) => {
        event.preventDefault()
        await resetAction()
    }

    useEffect(() => {
        resetAction()
    }, [])

    return (
        <CenterLayout icon={FaSignOutAlt} title={"Log out"}>
            {
                isLoaded ? (
                    error ? (
                        <ErrorMessage error={error}/>
                    ) : (
                        success ? (
                            <SuccessMessage success={success}/>
                        ) : (
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 col-xxl-4 offset-xxl-4">
                                    <form className="m-0 p-3 border border-muted bg-light" autoComplete="off" onSubmit={handleSubmit}>
                                        <div className="alert alert-primary m-0 p-3" role="alert">
                                            <h5 className="m-0 p-0 text-center">Would you like to log out?</h5>
                                        </div>
                                        <div className="m-0 mt-3 pt-3 pe-0 pb-0 ps-0 border-top border-muted d-flex flex-row justify-content-between align-items-center">
                                            <div className="m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                                                <button type="submit" className="btn btn-primary mx-1 my-0 d-flex flex-row justify-content-start align-items-center" title={SUBMIT_TEXT}>
                                                    {<SUBMIT_ICON size={SUBMIT_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{SUBMIT_TEXT}</span>
                                                </button>
                                                <button type="button" className="btn btn-dark mx-1 my-0 d-flex flex-row justify-content-start align-items-center" title={RESET_TEXT} onClick={handleReset}>
                                                    {<RESET_ICON size={RESET_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{RESET_TEXT}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                    )
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
    )
}

const SuccessMessage = (props) => {
    return (
        <React.Fragment>
            <div className="alert alert-success m-0 mb-3 p-3" role="alert">
                <h5 className="m-0 p-0 text-center">{props.success.message}</h5>
            </div>
        </React.Fragment>
    )
}

const ErrorMessage = (props) => {
    return (
        <React.Fragment>
            <div className="alert alert-danger m-0 p-3" role="alert">
                <h5 className="m-0 p-0 text-center">{props.error.message}</h5>
            </div>
        </React.Fragment>
    )
}

const LogOutView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_PROFILE_LOGOUT_URL} children={<LogOut/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_PROFILE_LOGOUT_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default LogOutView
