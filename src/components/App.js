//node_modules
import React, { Component } from 'react'

import CountDown from './CountDown'

import Riddles from './../lib/baseAggregate'
import User from '../class/User'
//other
import './../styles/App.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            first_player_name: [false, 'Pseudo'],
            first_player_clothes: [false, null],
            second_player_name: [false, 'Pseudo'],
            second_player_clothes: [false, null],
            data_players: false,
            timer: false,
            question: false,
            action: false,
            secondsRemaining: 30,
            inc: 1,
            data: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: [true, event.target.value]})
    }

    handleClick(){
        if(this.state.first_player_name[0]
            && this.state.second_player_name[0]
            && this.state.first_player_clothes[0]
            && this.state.second_player_clothes[0]){
                this.setState({data_players: true});
                let User1 = new User(this.state.first_player_name[1], this.state.first_player_clothes[1]);
                let User2 = new User(this.state.second_player_name[1], this.state.second_player_clothes[1]);
                let data = Riddles.getBuildingFinish(User1, User2);
                this.setState({data : data});
                this.setState({timer : data[this.state.inc]['timer']});
                this.setState({todo : data[this.state.inc]['question']});
            }
    }

    handleNext(){
        this.setState({inc : this.state.inc + 1})
        console.log(this.state.data)
        this.setState({timer : this.state.data[this.state.inc]['timer']});
        this.setState({todo : this.state.data[this.state.inc]['question']});
    }

  render() {
    if(this.state.data_players){
        return(
            <div className="App">
                <div className="logo-picolosex"></div>
                {this.state.timer ?
                    <div className="game-wrapper">
                        <div className="todo">{this.state.todo}</div>
                        <div className="timer"><CountDown secondsRemaining={this.state.timer} parentMethod={this.handleNext}/></div>
                    </div>
                :
                    <div className="game-wrapper">
                        <div className="todo">{this.state.todo}</div>
                        <button onClick={() => this.handleNext()}>Valider</button>
                    </div>
                }
            </div>
        )
    } else {
        return (
          <div className="App">
            <div className="logo-picolosex"></div>
              <form>
                  <div className="first_player player">
                      <h1>{this.state.first_player_name}</h1>
                      <input onChange={this.handleChange} name="first_player_name" type="text" required="required" placeholder="Pseudo"/>
                      <input onChange={this.handleChange} name="first_player_clothes" type="number" required="required" placeholder="Nombres de vêtements"/>
                  </div>
                  <div className="second_player player">
                      <h1>{this.state.second_player_name}</h1>
                      <input onChange={this.handleChange} name="second_player_name" type="text" required="required" placeholder="Pseudo"/>
                      <input onChange={this.handleChange} name="second_player_clothes" type="number" required="required" placeholder="Nombres de vêtements"/>
                  </div>
                  <button onClick={() => this.handleClick()}>Valider</button>
              </form>
          </div>
        )
    }
  }
}

export default App;
