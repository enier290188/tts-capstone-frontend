import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {Loader} from '@googlemaps/js-api-loader'
import {FaSearch, FaSync, FaBus} from 'react-icons/all'
import {APP_BUS_URL, APP_ERROR_404_URL} from '../../url/AppUrl'
import LoadingLayout from '../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../layout/content/center/CenterLayout'
import AppService from '../../../services/AppService'

// Backend.
const BUS_BACKEND_URL = 'buses/'
// Frontend. Reset.
const BUS_RESET_TEXT = 'Reset'
const BUS_RESET_ICON = FaSync
const BUS_RESET_ICON_SIZE = '1em'
// Frontend. Search.
const BUS_SEARCH_TEXT = 'Find Buses'
const BUS_SEARCH_ICON = FaSearch
const BUS_SEARCH_ICON_SIZE = '1em'

const Bus = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    const [addressInputValue, setAddressInputValue] = useState('')
    const [cityInputValue, setCityInputValue] = useState('')

    const [personLocation, setPersonLocation] = useState(null)
    const [buses, setBuses] = useState(null)

    const getRoutes = () => {
        setIsLoaded(false)
        setError(null)

        setCityInputValue('')
        setAddressInputValue('')

        setPersonLocation(null)
        setBuses(null)

        AppService.get(`${BUS_BACKEND_URL}get`)
            .then((response) => {
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            })
    }

    const postRoutes = () => {
        setIsLoaded(false)
        setError(null)

        setPersonLocation(null)
        setBuses(null)

        AppService.get(`${BUS_BACKEND_URL}post?address=${addressInputValue}&city=${cityInputValue}`)
            .then((response) => {
                setPersonLocation(response.data[0])
                setBuses(response.data[1])
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await postRoutes()
    }

    const handleReset = async (event) => {
        event.preventDefault()
        await getRoutes()
    }

    useEffect(() => {
        getRoutes()
    }, [])

    if (buses != null && personLocation != null) {
        const loader = new Loader({
            apiKey: `${process.env.REACT_APP_TTS_CAPSTONE_GOOGLE_KEY}`,
            version: "weekly"
        })
        loader.load().then(() => {
            let map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng)},
                zoom: 15,
                scrollwheel: false
            });

            new window.google.maps.Marker({
                position: {lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng)},
                map: map,
                title: "User Location",
            });

            for (let i = 0; i < buses.length; i++) {
                let marker = new window.google.maps.Marker({
                    position: {lat: parseFloat(buses[i].LATITUDE), lng: parseFloat(buses[i].LONGITUDE)},
                    map: map,
                    title: "Route #" + buses[i].ROUTE + ", Bus #" + buses[i].VEHICLE,
                });

                const contentString =
                    '<div id="content">' +
                    '<div id="siteNotice">' + '</div>' +
                    '<h1 id="firstHeading" class="firstHeading">' + 'Route #' + buses[i].ROUTE + ', Bus #' + buses[i].VEHICLE + '</h1>' +
                    '<div id="bodyContent">' + '</div>' +
                    '</div>';

                const infoWindow = new window.google.maps.InfoWindow({
                    content: contentString,
                });

                marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                });
            }
        });
    }

    return (
        <CenterLayout icon={FaBus} title={"Buses"}>
            {
                isLoaded ? (
                    error ? (
                        <ErrorMessage error={error}/>
                    ) : (
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 col-xxl-6 offset-xxl-3">
                                <div className="m-0 p-0 pb-1 d-flex flex-row justify-content-between align-items-center">
                                    <button type="button" className="btn btn-dark mx-1 my-0 px-2 py-1 d-flex flex-row justify-content-start align-items-center" title={`${BUS_RESET_TEXT}`} onClick={handleReset}>
                                        {<BUS_RESET_ICON size={BUS_RESET_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{BUS_RESET_TEXT}</span>
                                    </button>
                                </div>
                                <h1 className="text-center">Nearby Buses</h1>
                                <form className="m-0 p-3 border border-muted bg-light" autoComplete="off" onSubmit={handleSubmit}>
                                    <div className="m-0 mb-3 p-0">
                                        <label htmlFor="addressInputValue" className="form-label fw-bolder">Address:</label>
                                        <input
                                            value={addressInputValue}
                                            onChange={(event) => {
                                                setAddressInputValue(event.target.value)
                                            }}
                                            type="text"
                                            id="addressInputValue"
                                            className="form-control"
                                            placeholder="- Address -"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="m-0 mb-3 p-0">
                                        <label htmlFor="cityInputValue" className="form-label fw-bolder">City:</label>
                                        <input
                                            value={cityInputValue}
                                            onChange={(event) => {
                                                setCityInputValue(event.target.value)
                                            }}
                                            type="text"
                                            id="cityInputValue"
                                            className="form-control"
                                            placeholder="- City -"
                                            autoComplete="off"
                                            autoFocus
                                        />
                                    </div>
                                    <div className="m-0 mt-3 pt-3 pe-0 pb-0 ps-0 border-top border-muted d-flex flex-row justify-content-between align-items-center">
                                        <button type="submit" className="btn btn-primary mx-1 my-0 d-flex flex-row justify-content-start align-items-center" title={BUS_SEARCH_TEXT}>
                                            {<BUS_SEARCH_ICON size={BUS_SEARCH_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{BUS_SEARCH_TEXT}</span>
                                        </button>
                                    </div>
                                </form>
                                {
                                    buses != null ? (
                                        buses.length > 0 ? (
                                            <div className="table-responsive mt-3">
                                                <table className="table table-hover align-middle">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Route #</th>
                                                            <th scope="col">Bus #</th>
                                                            <th scope="col">Next Stop</th>
                                                            <th scope="col">Distance (mi)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            buses.map((bus, index) => <tr key={index}>
                                                                <td className="text-nowrap">{bus.ROUTE}</td>
                                                                <td className="text-nowrap">{bus.VEHICLE}</td>
                                                                <td className="text-nowrap">{bus.TIMEPOINT}</td>
                                                                <td className="text-nowrap">{bus.distance}</td>
                                                            </tr>)
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : (
                                            <div className="alert alert-info m-0 mt-3 p-3" role="alert">
                                                Sorry, there are no nearby buses.
                                            </div>
                                        )
                                    ) : null
                                }
                                {
                                    ((buses != null && personLocation != null)) ? (
                                        <div id="map" className="m-0 mt-3 p-0 border border-muted" style={{width: "100%", height: "450px"}}>Google Map</div>
                                    ) : null
                                }
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

const ErrorMessage = (props) => {
    return (
        <React.Fragment>
            <div className="alert alert-danger m-0 p-3" role="alert">
                <h5 className="m-0 p-0 text-center">{props.error.message}</h5>
            </div>
        </React.Fragment>
    )
}

const BusView = () => {
    return (
        <Switch>
            <Route path={APP_BUS_URL} children={<Bus/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_BUS_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default BusView
