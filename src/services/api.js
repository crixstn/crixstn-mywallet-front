import axios from "axios"

const url = process.env.REACT_APP_API_URL;

function SignUp(body){
    const promisse = axios.post(`${url}/sign-up`, body);
    console.log(url)
    return promisse
}

const api = {
    SignUp,
}

export default api;