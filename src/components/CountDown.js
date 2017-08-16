import React, { Component } from 'react'

class CountDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            secondsRemaining: 30
        };
    }

    tick() {
        this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
        } 
    }

    componentDidMount() {
        this.setState({ secondsRemaining: this.props.secondsRemaining });
        this.interval = setInterval(this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>Seconds Remaining: {this.state.secondsRemaining}</div>
        )
    }
}

export default CountDown
