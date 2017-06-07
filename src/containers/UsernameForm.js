import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class UsernameForm extends Component{
    render(){
        const {handleSubmit, pristine, reset, submitting} = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <Field name="firstUsername" component="input" required="required" type="text" placeholder="Name first player"/>
                <Field name="clothesFirstUser" component="input" required="required" type="text" placeholder="Clothes first player"/>
                <Field name="secondUsername" component="input" required="required" type="text" placeholder="Name second player"/>
                <Field name="clothesSecondUser" component="input" required="required" type="text" placeholder="Clothes second player"/>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear value</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'username'
})(UsernameForm);
