//node_modules
import React, { Component } from 'react'
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
            timer: false,
            question: false,
            action: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.launchTimer = this.launchTimer.bind(this);
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
            }
    }

    fetchData(){
        this.setState({timer : [this.getTimer()]});
        this.setState({action : [this.getAction()]});
        this.setState({question : [this.getQuestion()]});
    }

    launchTimer() {
        setInterval(this.countDown(), 1000);
     }

    countDown(){
        console.log(this.state.timer)
        let seconds = this.state.timer - 1;
        this.setState({
            timer: seconds
        });

        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    getTimer(){
        return 30
    }

    getQuestion(){
        return this.state.first_player_name[1] + " doit dire la couleur de préférée de " + this.state.second_player_name[1] + " sinon il boit"
    }

    getAction(){
        return this.state.first_player_name[1] + " embrasse " + this.state.second_player_name[1] + " pendant 30 seconde"
    }

  render() {
    if(this.state.data_players){
        return(
            <div className="App">
                {this.state.timer ?
                    <div className="game-wrapper">
                        <div className="timer">{this.state.timer}</div>
                        <input type="button" value="launch timer" onClick={this.launchTimer}/>
                        {this.state.question ?
                            <div className="question">{this.state.question}</div>
                            : <div className="action">{this.state.action[1]}</div>
                        }
                    </div>
                :
                    <div className="launche-wrapper">
                        Si vous êtes prêt à baiser comme des chacals lancez le jeu bande de chacal ! <br />
                        <input type="button" value="BAISER BAISER BAISER" onClick={this.fetchData}/>
                    </div>
                }
            </div>
        )
    } else {
        return (
          <div className="App">
              <form>
                  <div className="first_player">
                      <h1>{this.state.first_player_name}</h1>
                      <input onChange={this.handleChange} name="first_player_name" type="text" required="required" placeholder="Pseudo"/>
                      <input onChange={this.handleChange} name="first_player_clothes" type="number" required="required" placeholder="Nombres de vêtements"/>
                  </div>
                  <div className="second_player">
                      <h1>{this.state.second_player_name}</h1>
                      <input onChange={this.handleChange} name="second_player_name" type="text" required="required" placeholder="Pseudo"/>
                      <input onChange={this.handleChange} name="second_player_clothes" type="number" required="required" placeholder="Nombres de vêtements"/>
                  </div>
                  <input type="button" value="Valider" onClick={this.handleClick}/>
              </form>
          </div>
        )
    }
  }
}

export default App;
