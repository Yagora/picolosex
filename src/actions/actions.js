import {browserHistory} from 'react-router';

export function authUser(values){
    browserHistory.push('/SubmitRedirect');
    return{
        type: "AUTH_USER",
        payload: values
    }
}
