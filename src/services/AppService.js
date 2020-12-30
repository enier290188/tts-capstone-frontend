import axios from 'axios'

const AppService = axios.create({
    baseURL: `${process.env.REACT_APP_TTS_CAPSTONE_BACKEND_URL}/api/`,
    headers: {
        'Content-type': 'application/json'
    }
})

export default AppService
