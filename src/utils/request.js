import Axios from "axios";
import Qs from "qs";
import getStorage from '../utils/storage';

export default async function fetch(options){
    const {
        url,
        method = 'GET',
        payload
    } = options;
    const _token = await getStorage("token");
    const _headers = {
        "token": _token ? _token : "",
        "content-type": 'application/json'
    }
    let param = {};
    if(method === 'GET'){
        param = {
            method: method,
            header: _headers
        }
        return new Promise((resolve, reject) =>{ 
            Axios.get(url,{
                params: param
            }).then(res => {
                resolve(res.data);
            }).catch(err =>{
                reject(err.data);
            })
        })
    }else{
        param = {
            method: method,
            body: JSON.stringify(payload),
            headers: _headers,
        }
        return new Promise((resolve, reject) =>{ 
            Axios.post(url,Qs.stringify(param))
            .then(res => {
                resolve(res.data);
            }).catch(err =>{
                reject(err.data);
            })
        })
    }
}