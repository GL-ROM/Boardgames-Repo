import React, { Component } from 'react';
import './App.css';
import Boardgames from './components/Boardgames';
import NewBoardgameForm from './components/NewBoardgameForm';

class App extends Component {

  state = {
    boardgames: [],
    formInputs: {
      name: '',
      box_art: '',
      min_players: '',
      max_players: '',
      min_playtime: '',
      max_playtime: '',
      publisher: ''
    }
  }

  componentDidMount() {
    this.getBoardgames()
  }

  getBoardgames = () => {
    fetch('http://localhost:3000/boardgames')
        .then(response => response.json())
        .then(json => this.setState({ boardgames: json}))
    .catch(error => console.error(error))
  }

  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/boardgames', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdBoardgame => {
      return createdBoardgame.json()
    })

    .then(jsonedBoardgame => {
     // reset the form
      this.setState({
        formInputs: {
          name: '',
          box_art: '',
          min_players: '',
          max_players: '',
          min_playtime: '',
          max_playtime: '',
          publisher: ''
        },
        boardgames: [jsonedBoardgame, ...this.state.boardgames]
      })
    })
    .catch(error => console.log(error))
  }

  render (){
    return (
      <div>
        <Boardgames boardgames={this.state.boardgames} />
        <NewBoardgameForm formInputs={this.state.formInputs} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
