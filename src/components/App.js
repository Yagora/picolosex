//node_modules
import React, { Component } from 'react'
//lib
import { getActionBase, getQuestionBase, getBuildingFinish } from './../lib/baseAggregate'
//other
import './../styles/App.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            first_player_name: [false, 'Joueur 1'],
            first_player_clothes: [false, null],
            second_player_name: [false, 'Joueur 2'],
            second_player_clothes: [false, null],
            data_players: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        let stateToSet = event.target.name;
        this.setState({[stateToSet]: [true, event.target.value]})
    }

    handleClick(){
        if(this.state.first_player_name[0]
            && this.state.second_player_name[0]
            && this.state.first_player_clothes[0]
            && this.state.second_player_clothes[0]){
                this.setState({data_players: true});
            }
    }

  render() {
    if(this.state.data_players){
        return(
            <div className="App">
                <div className="timer">Ici il y aura un super timer</div>
                <div className="question">Ici la question</div>
            </div>
        )
    } else {
        return (
          <div className="App">
              <form>
                  <div className="first_player">
                      <h1>{this.state.first_player_name}</h1>
                      <input onChange={this.handleChange} name="first_player_name" type="text" required="required" placeholder={this.state.first_player_name}/>
                      <input onChange={this.handleChange} name="first_player_clothes" type="number" required="required" placeholder="Nombres de vêtements"/>
                  </div>
                  <div className="second_player">
                      <h1>{this.state.second_player_name}</h1>
                      <input onChange={this.handleChange} name="second_player_name" type="text" required="required" placeholder="Pseudo"/>
                      <input onChange={this.handleChange} name="second_player_clothes" type="number" required="required" placeholder="Nombres de vêtements"/>
                  </div>
                  <input type="button" value="GO !" onClick={this.handleClick}/>
              </form>
          </div>
        )
    }
  }
}

export default App;
