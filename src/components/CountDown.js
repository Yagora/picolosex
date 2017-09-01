import React, { Component } from 'react'

class CountDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            secondsRemaining: null
        };
        this.tick = this.tick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.setState({ secondsRemaining: this.props.secondsRemaining });
        this.interval = setInterval(this.tick, 1000);
    }

    handleClick(){
        this.props.parentMethod();
    }

    tick() {
        this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        if(this.state.secondsRemaining > 0){
            return <div>Seconds Remaining: {this.state.secondsRemaining}</div>
        } else {
            return <button onClick={this.handleClick} >Valider</button>
        }
    }
}

export default CountDown
