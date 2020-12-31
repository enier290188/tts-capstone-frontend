import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaSearch, FaSync, WiDayCloudyGusts} from 'react-icons/all'
import {APP_WEATHER_URL, APP_ERROR_404_URL} from '../../url/AppUrl'
import LoadingLayout from '../../layout/_util_/loading/LoadingLayout'
import CenterLayout from '../../layout/content/center/CenterLayout'
import AppService from '../../../services/AppService'

// Backend.
const WEATHER_BACKEND_URL = 'weather/'
// Frontend. Reset.
const WEATHER_RESET_TEXT = 'Reset'
const WEATHER_RESET_ICON = FaSync
const WEATHER_RESET_ICON_SIZE = '1em'
// Frontend. Search.
const WEATHER_SEARCH_TEXT = 'Check Weather'
const WEATHER_SEARCH_ICON = FaSearch
const WEATHER_SEARCH_ICON_SIZE = '1em'

const Weather = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [zipCodeList, setZipCodeList] = useState([])
    const [error, setError] = useState(null)

    const [weather, setWeather] = useState(null)
    const [zipCodeInputValue, setZipCodeInputValue] = useState('')

    const getZipCodes = () => {
        setIsLoaded(false)
        setZipCodeList([])
        setError(null)

        AppService.get(`${WEATHER_BACKEND_URL}`)
            .then((response) => {
                setZipCodeList(response.data)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            })
    }

    const getZipCodeWeather = () => {
        setIsLoaded(false)
        setError(null)
        setWeather(null)

        AppService.get(`${WEATHER_BACKEND_URL}${zipCodeInputValue}/`)
            .then((response) => {
                setWeather(response.data)
                getZipCodes()
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await getZipCodeWeather()
    }

    const handleReset = async (event) => {
        event.preventDefault()
        await getZipCodes()
    }

    useEffect(() => {
        getZipCodes()
    }, [])

    return (
        <CenterLayout icon={WiDayCloudyGusts} title={"Weather"}>
            {
                isLoaded ? (
                    error ? (
                        <ErrorMessage error={error}/>
                    ) : (
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 col-xxl-6 offset-xxl-3">
                                <div className="m-0 p-0 pb-1 d-flex flex-row justify-content-between align-items-center">
                                    <button type="button" className="btn btn-dark mx-1 my-0 px-2 py-1 d-flex flex-row justify-content-start align-items-center" title={`${WEATHER_RESET_TEXT}`} onClick={handleReset}>
                                        {<WEATHER_RESET_ICON size={WEATHER_RESET_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{WEATHER_RESET_TEXT}</span>
                                    </button>
                                </div>
                                <h1 className="text-center">Get Your Local Forecast</h1>
                                <form className="m-0 p-3 border border-muted bg-light" autoComplete="off" onSubmit={handleSubmit}>
                                    <div className="m-0 mb-3 p-0">
                                        <label htmlFor="zipCodeCurrent" className="form-label fw-bolder">Zip Code:</label>
                                        <input
                                            value={zipCodeInputValue}
                                            onChange={(event) => {
                                                setZipCodeInputValue(event.target.value)
                                            }}
                                            type="text"
                                            id="zipCodeCurrent"
                                            className="form-control"
                                            placeholder="- Zip Code -"
                                            autoComplete="off"
                                            autoFocus
                                            required
                                        />
                                    </div>
                                    <div className="m-0 mt-3 pt-3 pe-0 pb-0 ps-0 border-top border-muted d-flex flex-row justify-content-between align-items-center">
                                        <button type="submit" className="btn btn-primary mx-1 my-0 d-flex flex-row justify-content-start align-items-center" title={WEATHER_SEARCH_TEXT}>
                                            {<WEATHER_SEARCH_ICON size={WEATHER_SEARCH_ICON_SIZE}/>}<span className="h6 m-0 ms-1 p-0">{WEATHER_SEARCH_TEXT}</span>
                                        </button>
                                    </div>
                                </form>
                                {
                                    weather ? (
                                        weather.name === 'error' ? (
                                            <div className="alert alert-danger m-0 mt-3 p-3" role="alert">
                                                Invalid zip code. Weather data not found.
                                            </div>
                                        ) : (
                                            <div className="alert alert-success m-0 mt-3 p-3" role="alert">
                                                <h3>Forecast for: {weather.name}</h3>
                                                <p>Temperature: {weather.main.temp} °F</p>
                                                <p>Temperature (Max): {weather.main.temp_max} °F</p>
                                                <p>Temperature (Min): {weather.main.temp_min} °F</p>
                                                <p>Temperature (Feel Like): {weather.main.feels_like} °F</p>
                                                <p>Cloud Cover: {weather.clouds.all} %</p>
                                                <p>Wind: {weather.wind.speed} mph</p>
                                                <p>Conditions: {weather.weather[0].description}<img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/></p>
                                            </div>
                                        )
                                    ) : null
                                }
                                {
                                    zipCodeList.length > 0 ? (
                                        <div className="table-responsive mt-3">
                                            <table className="table table-hover align-middle">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"><h4 className="m-0 p-0 text-center">Up 10 most recent zip codes</h4></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        zipCodeList.map((zipCode) => <tr key={zipCode.id}>
                                                            <td className="text-center text-nowrap">{zipCode.zipCode}</td>
                                                        </tr>)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
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

const WeatherView = () => {
    return (
        <Switch>
            <Route path={APP_WEATHER_URL} children={<Weather/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_WEATHER_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default WeatherView
