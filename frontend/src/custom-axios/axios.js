import axios from "axios";

// Here we will set up everything necessary for axios to make
// the real calls and not make these calls multiple times

const instance = axios.create({
    baseURL: 'http://localhost:9091/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

//We will use this instance for all parts of our React app
export default instance;

