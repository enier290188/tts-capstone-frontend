import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaCheck, FaSync, FaUserEdit} from 'react-icons/all'
import {APP_SECURITY_PROFILE_INFO_URL, APP_ERROR_404_URL} from '../../../../url/AppUrl'
import LoadingLayout from '../../../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../../../layout/content/center/CenterLayout'

// Frontend. Reset.
const RESET_TEXT = 'Reset'
const RESET_ICON = FaSync
const RESET_ICON_SIZE = '1em'
// Frontend. Submit.
const SUBMIT_TEXT = 'Submit'
const SUBMIT_ICON = FaCheck
const SUBMIT_ICON_SIZE = '1em'

const Info = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const [userNameInputValue, setUserNameInputValue] = useState('')
    const [firstNameInputValue, setFirstNameInputValue] = useState('')
    const [lastNameInputValue, setLastNameInputValue] = useState('')

    const submitAction = () => {
        setSuccess({message: `You have successfully updated your User Profile.`})
        setTimeout(() => {
            setSuccess(null)
        }, 3000)
    }

    const resetAction = () => {
        setIsLoaded(true)
        setSuccess(null)
        setError(null)

        setUserNameInputValue('')
        setFirstNameInputValue('')
        setLastNameInputValue('')
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
        <CenterLayout icon={FaUserEdit} title={"Info"}>
            {
                isLoaded ? (
                    error ? (
                        <ErrorMessage error={error}/>
                    ) : (
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 col-xxl-4 offset-xxl-4">
                                {
                                    success ? (
                                        <SuccessMessage success={success}/>
                                    ) : null
                                }
                                <form className="m-0 p-3 border border-muted bg-light" autoComplete="off" onSubmit={handleSubmit}>
                                    <div className="m-0 mb-3 p-0">
                                        <label htmlFor="firstNameInputValue" className="form-label fw-bolder">First Name:</label>
                                        <input
                                            value={firstNameInputValue}
                                            onChange={(event) => {
                                                setFirstNameInputValue(event.target.value)
                                            }}
                                            type="text"
                                            id="firstNameInputValue"
                                            className="form-control"
                                            placeholder="- First Name -"
                                            autoComplete="off"
                                            autoFocus
                                            required
                                        />
                                    </div>
                                    <div className="m-0 mb-3 p-0">
                                        <label htmlFor="lastNameInputValue" className="form-label fw-bolder">Last Name:</label>
                                        <input
                                            value={lastNameInputValue}
                                            onChange={(event) => {
                                                setLastNameInputValue(event.target.value)
                                            }}
                                            type="text"
                                            id="lastNameInputValue"
                                            className="form-control"
                                            placeholder="- Last Name -"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                    <div className="m-0 mb-3 p-0">
                                        <label htmlFor="userNameInputValue" className="form-label fw-bolder">User Name:</label>
                                        <input
                                            value={userNameInputValue}
                                            onChange={(event) => {
                                                setUserNameInputValue(event.target.value)
                                            }}
                                            type="text"
                                            id="userNameInputValue"
                                            className="form-control"
                                            placeholder="- User Name -"
                                            autoComplete="off"
                                            required
                                        />
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
                <p className="m-0 p-0">{props.success.message}</p>
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

const InfoView = () => {
    return (
        <Switch>
            <Route path={APP_SECURITY_PROFILE_INFO_URL} children={<Info/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_SECURITY_PROFILE_INFO_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default InfoView
