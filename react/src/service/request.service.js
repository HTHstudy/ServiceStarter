import { map } from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import EnvironmentService from './environment.service';

export class RequestService {
    
    static HEADER = {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json'
    }

    static setHeader(key, value) {
        if (value) {
            RequestService.HEADER[key] = value
        } else {
            delete RequestService.HEADER[key]
        }
    }

    static get(path, query={}) {
        const url = EnvironmentService.getEnv().apiUrl + path + '?' + RequestService.toQueryString(query)
        return ajax.get(url, RequestService.HEADER).pipe(
            map(res=>res.response)
        )
    }

    static post(path, body={}) {
        const url = EnvironmentService.getEnv().apiUrl + path
        return ajax.post(url, body, RequestService.HEADER).pipe(
            map(res=>res.response)
        )
    }
    
    static put(path, body={}) {
        const url = EnvironmentService.getEnv().apiUrl + path
        return ajax.put(url, body, RequestService.HEADER).pipe(
            map(res=>res.response)
        )
    }

    static patch(path, body={}) {
        const url = EnvironmentService.getEnv().apiUrl + path
        return ajax.patch(url, body, RequestService.HEADER).pipe(
            map(res=>res.response)
        )
    }

    static delete(path, query={}) {
        const url = EnvironmentService.getEnv().apiUrl + path + '?' + RequestService.toQueryString(query)
        return ajax.delete(url, RequestService.HEADER).pipe(
            map(res=>res.response)
        )
    }
    
    static toQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }
} 
