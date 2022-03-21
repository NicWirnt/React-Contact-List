import  Axios  from "axios"

const apiUrl = "https://randomuser.me/api/?"

export const fetchUser = (args="results=20") =>{
    return Axios.get(apiUrl + args).then(res => res.data);
}