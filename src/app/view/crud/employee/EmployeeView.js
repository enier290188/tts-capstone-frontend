import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {NavLink, useParams} from 'react-router-dom'
import {FaPlus, FaCheck, FaPen, FaTrash, FaUserTie} from 'react-icons/all'
import {APP_CRUD_EMPLOYEE_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import LoadingLayout from '../../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../../layout/content/center/CenterLayout'
import AppService from '../../../../services/AppService'

// Backend.
const CRUD_BACKEND_URL = 'employee/'
// Frontend. Entity.
const CRUD_ENTITY_TEXT = 'Employee'
const CRUD_ENTITY_URL = APP_CRUD_EMPLOYEE_URL
const CRUD_ENTITY_ICON = FaUserTie
const CRUD_ENTITY_PK_FIELD = 'id'
const CRUD_ENTITY_IDENTIFIER_FIELDS = ['firstName', 'lastName']
const CRUD_ENTITYLIST_FIELDS_TEXT = ['First Name', 'Last Name', 'Description', 'Created At', 'Updated At']
const CRUD_ENTITYLIST_FIELDS_NAME = ['firstName', 'lastName', 'description', 'createdAt', 'updatedAt']
const CRUD_ENTITYDETAIL_FIELDS_TEXT = ['First Name', 'Last Name', 'Description', 'Created At', 'Updated At']
const CRUD_ENTITYDETAIL_FIELDS_NAME = ['firstName', 'lastName', 'description', 'createdAt', 'updatedAt']
// Frontend. Create.
const CRUD_CREATE_TEXT = 'Create'
const CRUD_CREATE_URL = 'create/'
const CRUD_CREATE_ICON = FaPlus
const CRUD_CREATE_ICON_SIZE = '1em'
// Frontend. Detail.
const CRUD_DETAIL_TEXT = 'Detail'
const CRUD_DETAIL_URL = 'detail/'
const CRUD_DETAIL_ICON = FaCheck
const CRUD_DETAIL_ICON_SIZE = '1em'
// Frontend. Update.
const CRUD_UPDATE_TEXT = 'Update'
const CRUD_UPDATE_URL = 'update/'
const CRUD_UPDATE_ICON = FaPen
const CRUD_UPDATE_ICON_SIZE = '1em'
// Frontend. Delete.
const CRUD_DELETE_TEXT = 'Delete'
const CRUD_DELETE_URL = 'delete/'
const CRUD_DELETE_ICON = FaTrash
const CRUD_DELETE_ICON_SIZE = '1em'

const EntityList = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [entityList, setEntityList] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        AppService.get(`${CRUD_BACKEND_URL}`)
            .then((response) => {
                setEntityList(response.data)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            })
    }, [])

    return (
        <CenterLayout icon={CRUD_ENTITY_ICON} title={CRUD_ENTITY_TEXT}>
            {
                isLoaded ? (
                    error ? (
                        <ErrorMessage error={error}/>
                    ) : (
                        <React.Fragment>
                            <div className="m-0 p-0 pb-1 d-flex flex-row justify-content-end align-items-center">
                                <NavLink className={"btn btn-secondary"} activeClassName={"active"} to={`${CRUD_ENTITY_URL}${CRUD_CREATE_URL}`} title={`${CRUD_CREATE_TEXT} ${CRUD_ENTITY_TEXT}`}>
                                    {<CRUD_CREATE_ICON size={CRUD_CREATE_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{`${CRUD_CREATE_TEXT} ${CRUD_ENTITY_TEXT}`}</span>
                                </NavLink>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-borderless table-hover align-middle">
                                    <thead className="table-success">
                                        <tr>
                                            <th scope="col">&nbsp;</th>
                                            {
                                                CRUD_ENTITYLIST_FIELDS_TEXT.map((fieldText, index) => {
                                                    return (
                                                        <th key={index} className="text-nowrap" scope="col">{fieldText}</th>
                                                    )
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            entityList.map((entity) => {
                                                const linkTitle = `${CRUD_ENTITY_TEXT} "${CRUD_ENTITY_IDENTIFIER_FIELDS.map((name) => entity[name]).join(' ')}"`
                                                const detailLinkTitle = `${CRUD_DETAIL_TEXT} ${linkTitle}`
                                                const updateLinkTitle = `${CRUD_UPDATE_TEXT} ${linkTitle}`
                                                const deleteLinkTitle = `${CRUD_DELETE_TEXT} ${linkTitle}`
                                                const linkTo = `${CRUD_ENTITY_URL}${entity[CRUD_ENTITY_PK_FIELD]}/`
                                                const detailLinkTo = `${linkTo}${CRUD_DETAIL_URL}`
                                                const updateLinkTo = `${linkTo}${CRUD_UPDATE_URL}`
                                                const deleteLinkTo = `${linkTo}${CRUD_DELETE_URL}`
                                                return (
                                                    <tr key={entity[CRUD_ENTITY_PK_FIELD]}>
                                                        <th className="d-flex flex-row justify-content-start align-items-center" scope="row">
                                                            <NavLink className={"btn btn-primary mx-1 my-0"} activeClassName={"active"} to={detailLinkTo} title={detailLinkTitle}>
                                                                {<CRUD_DETAIL_ICON size={CRUD_DETAIL_ICON_SIZE}/>}
                                                            </NavLink>
                                                            <NavLink className={"btn btn-secondary mx-1 my-0"} activeClassName={"active"} to={updateLinkTo} title={updateLinkTitle}>
                                                                {<CRUD_UPDATE_ICON size={CRUD_UPDATE_ICON_SIZE}/>}
                                                            </NavLink>
                                                            <NavLink className={"btn btn-danger mx-1 my-0"} activeClassName={"active"} to={deleteLinkTo} title={deleteLinkTitle}>
                                                                {<CRUD_DELETE_ICON size={CRUD_DELETE_ICON_SIZE}/>}
                                                            </NavLink>
                                                        </th>
                                                        {
                                                            CRUD_ENTITYLIST_FIELDS_NAME.map((fieldName, index) => {
                                                                return (
                                                                    <td key={index} className="text-nowrap">{entity[fieldName]}</td>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </React.Fragment>
                    )
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
    )
}

const EntityCreate = () => {
    useEffect(() => {
    }, [])

    return (
        <CenterLayout icon={CRUD_ENTITY_ICON} title={`${CRUD_CREATE_TEXT} ${CRUD_ENTITY_TEXT}`}>
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 col-xxl-6 offset-xxl-3">
                    <div className="alert alert-info m-0 p-3" role="alert">
                        <h5 className="m-0 p-0 text-center">Would you like to create it?</h5>
                    </div>
                    <div className="m-0 mt-3 pt-3 pe-0 pb-0 ps-0 border-top border-muted d-flex flex-row justify-content-between align-items-center">
                        <div className="m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                            <NavLink className={"btn btn-secondary mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={`${CRUD_ENTITY_URL}${CRUD_CREATE_URL}`} title={`${CRUD_CREATE_TEXT} ${CRUD_ENTITY_TEXT}`}>
                                {<CRUD_CREATE_ICON size={CRUD_CREATE_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{`${CRUD_CREATE_TEXT} ${CRUD_ENTITY_TEXT}`}</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </CenterLayout>
    )
}

const EntityDetail = () => {
    const {pk} = useParams()
    const [isLoaded, setIsLoaded] = useState(false)
    const [entity, setEntity] = useState(null)
    const [entityLink, setEntityLink] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        AppService.get(`${CRUD_BACKEND_URL}${pk}/`)
            .then((response) => {
                const entity = response.data
                const linkTitle = `${CRUD_ENTITY_TEXT} "${CRUD_ENTITY_IDENTIFIER_FIELDS.map((name) => entity[name]).join(' ')}"`
                const linkTo = `${CRUD_ENTITY_URL}${entity[CRUD_ENTITY_PK_FIELD]}/`
                setEntity(entity)
                setEntityLink({
                    'detail': {
                        'title': `${CRUD_DETAIL_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_DETAIL_URL}`
                    },
                    'update': {
                        'title': `${CRUD_UPDATE_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_UPDATE_URL}`
                    },
                    'delete': {
                        'title': `${CRUD_DELETE_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_DELETE_URL}`
                    }
                })
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            })
    }, [pk])

    const entityDetailTitle = isLoaded && !error
        ? `${CRUD_DETAIL_TEXT} ${CRUD_ENTITY_TEXT} "${CRUD_ENTITY_IDENTIFIER_FIELDS.map((name) => entity[name]).join(' ')}"`
        : `${CRUD_DETAIL_TEXT} ${CRUD_ENTITY_TEXT}`

    return (
        <CenterLayout icon={CRUD_ENTITY_ICON} title={entityDetailTitle}>
            {
                isLoaded ? (
                    error ? (
                        <ErrorMessage error={error}/>
                    ) : (
                        <React.Fragment>
                            <div className="row">
                                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 col-xxl-6 offset-xxl-3">
                                    <div className="table-responsive">
                                        <table className="table table-borderless align-middle">
                                            <thead className="table-success">
                                                <tr>
                                                    <th scope="col">Field</th>
                                                    <th scope="col">Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    CRUD_ENTITYDETAIL_FIELDS_NAME.map((fieldName, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="text-nowrap">{CRUD_ENTITYDETAIL_FIELDS_TEXT[index]}</td>
                                                                <td className="text-nowrap">{entity[fieldName]}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="m-0 mt-3 pt-3 pe-0 pb-0 ps-0 border-top border-muted d-flex flex-row justify-content-between align-items-center">
                                        <div className="m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                                            <NavLink className={"btn btn-primary mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.detail.to} title={entityLink.detail.title}>
                                                {<CRUD_DETAIL_ICON size={CRUD_DETAIL_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_DETAIL_TEXT}</span>
                                            </NavLink>
                                        </div>
                                        <div className="m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                                            <NavLink className={"btn btn-secondary mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.update.to} title={entityLink.update.title}>
                                                {<CRUD_UPDATE_ICON size={CRUD_UPDATE_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_UPDATE_TEXT}</span>
                                            </NavLink>
                                            <NavLink className={"btn btn-danger mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.delete.to} title={entityLink.delete.title}>
                                                {<CRUD_DELETE_ICON size={CRUD_DELETE_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_DELETE_TEXT}</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
    )
}

const EntityUpdate = () => {
    const {pk} = useParams()
    const [isLoaded, setIsLoaded] = useState(false)
    const [entity, setEntity] = useState(null)
    const [entityLink, setEntityLink] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        AppService.get(`${CRUD_BACKEND_URL}${pk}/`)
            .then((response) => {
                const entity = response.data
                const linkTitle = `${CRUD_ENTITY_TEXT} "${CRUD_ENTITY_IDENTIFIER_FIELDS.map((name) => entity[name]).join(' ')}"`
                const linkTo = `${CRUD_ENTITY_URL}${entity[CRUD_ENTITY_PK_FIELD]}/`
                setEntity(entity)
                setEntityLink({
                    'detail': {
                        'title': `${CRUD_DETAIL_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_DETAIL_URL}`
                    },
                    'update': {
                        'title': `${CRUD_UPDATE_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_UPDATE_URL}`
                    },
                    'delete': {
                        'title': `${CRUD_DELETE_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_DELETE_URL}`
                    }
                })
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            })
    }, [pk])

    const entityUpdateTitle = isLoaded && !error
        ? `${CRUD_UPDATE_TEXT} ${CRUD_ENTITY_TEXT} "${CRUD_ENTITY_IDENTIFIER_FIELDS.map((name) => entity[name]).join(' ')}"`
        : `${CRUD_UPDATE_TEXT} ${CRUD_ENTITY_TEXT}`

    return (
        <CenterLayout icon={CRUD_ENTITY_ICON} title={entityUpdateTitle}>
            {
                isLoaded ? (
                    error ? (
                        <ErrorMessage error={error}/>
                    ) : (
                        <React.Fragment>
                            <div className="row">
                                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 col-xxl-6 offset-xxl-3">
                                    <div className="alert alert-info m-0 p-3" role="alert">
                                        <h5 className="m-0 p-0 text-center">Would you like to update it?</h5>
                                    </div>
                                    <div className="m-0 mt-3 pt-3 pe-0 pb-0 ps-0 border-top border-muted d-flex flex-row justify-content-between align-items-center">
                                        <div className="m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                                            <NavLink className={"btn btn-secondary mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.update.to} title={entityLink.update.title}>
                                                {<CRUD_UPDATE_ICON size={CRUD_UPDATE_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_UPDATE_TEXT}</span>
                                            </NavLink>
                                        </div>
                                        <div className="m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                                            <NavLink className={"btn btn-primary mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.detail.to} title={entityLink.detail.title}>
                                                {<CRUD_DETAIL_ICON size={CRUD_DETAIL_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_DETAIL_TEXT}</span>
                                            </NavLink>
                                            <NavLink className={"btn btn-danger mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.delete.to} title={entityLink.delete.title}>
                                                {<CRUD_DELETE_ICON size={CRUD_DELETE_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_DELETE_TEXT}</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
    )
}

const EntityDelete = () => {
    const {pk} = useParams()
    const [isLoaded, setIsLoaded] = useState(false)
    const [entity, setEntity] = useState(null)
    const [entityLink, setEntityLink] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        AppService.get(`${CRUD_BACKEND_URL}${pk}/`)
            .then((response) => {
                const entity = response.data
                const linkTitle = `${CRUD_ENTITY_TEXT} "${CRUD_ENTITY_IDENTIFIER_FIELDS.map((name) => entity[name]).join(' ')}"`
                const linkTo = `${CRUD_ENTITY_URL}${entity[CRUD_ENTITY_PK_FIELD]}/`
                setEntity(entity)
                setEntityLink({
                    'detail': {
                        'title': `${CRUD_DETAIL_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_DETAIL_URL}`
                    },
                    'update': {
                        'title': `${CRUD_UPDATE_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_UPDATE_URL}`
                    },
                    'delete': {
                        'title': `${CRUD_DELETE_TEXT} ${linkTitle}`,
                        'to': `${linkTo}${CRUD_DELETE_URL}`
                    }
                })
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            })
    }, [pk])

    const entityDeleteTitle = isLoaded && !error
        ? `${CRUD_DELETE_TEXT} ${CRUD_ENTITY_TEXT} "${CRUD_ENTITY_IDENTIFIER_FIELDS.map((name) => entity[name]).join(' ')}"`
        : `${CRUD_DELETE_TEXT} ${CRUD_ENTITY_TEXT}`

    return (
        <CenterLayout icon={CRUD_ENTITY_ICON} title={entityDeleteTitle}>
            {
                isLoaded ? (
                    error ? (
                        <ErrorMessage error={error}/>
                    ) : (
                        <React.Fragment>
                            <div className="row">
                                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 col-xxl-6 offset-xxl-3">
                                    <div className="alert alert-danger m-0 p-3" role="alert">
                                        <h5 className="m-0 p-0 text-center">Would you like to delete it?</h5>
                                    </div>
                                    <div className="m-0 mt-3 pt-3 pe-0 pb-0 ps-0 border-top border-muted d-flex flex-row justify-content-between align-items-center">
                                        <div className="m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                                            <NavLink className={"btn btn-danger mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.delete.to} title={entityLink.delete.title}>
                                                {<CRUD_DELETE_ICON size={CRUD_DELETE_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_DELETE_TEXT}</span>
                                            </NavLink>
                                        </div>
                                        <div className="m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                                            <NavLink className={"btn btn-primary mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.detail.to} title={entityLink.detail.title}>
                                                {<CRUD_DETAIL_ICON size={CRUD_DETAIL_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_DETAIL_TEXT}</span>
                                            </NavLink>
                                            <NavLink className={"btn btn-secondary mx-1 my-0 d-flex flex-row justify-content-start align-items-center"} activeClassName={"active"} to={entityLink.update.to} title={entityLink.update.title}>
                                                {<CRUD_UPDATE_ICON size={CRUD_UPDATE_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{CRUD_UPDATE_TEXT}</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                ) : (
                    <LoadingLayout/>
                )
            }
        </CenterLayout>
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

const EmployeeView = () => {
    return (
        <Switch>
            <Route path={APP_CRUD_EMPLOYEE_URL} children={<EntityList/>} exact={true}/>
            <Route path={`${APP_CRUD_EMPLOYEE_URL}${CRUD_CREATE_URL}`} children={<EntityCreate/>} exact={true}/>
            <Route path={`${APP_CRUD_EMPLOYEE_URL}:pk/${CRUD_DETAIL_URL}`} children={<EntityDetail/>} exact={true}/>
            <Route path={`${APP_CRUD_EMPLOYEE_URL}:pk/${CRUD_UPDATE_URL}`} children={<EntityUpdate/>} exact={true}/>
            <Route path={`${APP_CRUD_EMPLOYEE_URL}:pk/${CRUD_DELETE_URL}`} children={<EntityDelete/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_CRUD_EMPLOYEE_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default EmployeeView
