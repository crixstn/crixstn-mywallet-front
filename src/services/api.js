import axios from "axios"

const url = process.env.REACT_APP_API_URL;

function SignUp(body){
    const promisse = axios.post(`${url}/sign-up`, body);
    return promisse
}

function SignIn(body){
    const promisse = axios.post(`${url}/sign-in`, body);
    return promisse
}

const api = {
    SignUp,
    SignIn
}

export default api;