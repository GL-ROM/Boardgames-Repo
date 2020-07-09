import React, { Component } from 'react';

class Boardgames extends Component {
    
    state = {
        boardgames: []
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

    render () {
        return (
            <div>
                <h1>Boardgames</h1>
                {this.state.boardgames.map(boardgame => {
                    return (
                        <div key={boardgame.id} className="boardgame">
                            <h3>{ boardgame.name }</h3>
                            <h4>{ boardgame.publisher }</h4>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Boardgames;