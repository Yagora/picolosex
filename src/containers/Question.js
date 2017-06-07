import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Question extends Component {
     render(){
         return(
             <ul>
                <li>{this.props.question.po}</li>
             </ul>
         )
     }
}

function mapStateToProps(state){
    return{
        question: state.question
    }
}

export default connect(mapStateToProps)(Question);
