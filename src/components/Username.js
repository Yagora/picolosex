import React, {Component} from 'react';

import UsernameForm from './../containers/UsernameForm.js';
import {showSubmit} from './../actions/actions.js';

class Username extends Component{
    render(){
        return(
            <UsernameForm onSubmit={showSubmit} />
        )
    }
}

export default Username;
