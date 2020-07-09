import React, { Component } from 'react';

class Boardgames extends Component {

    render () {
        return (
            <div>
                <h1>Gamenight</h1>
                <div className="repo-container">
                    {this.props.boardgames.map(boardgame => {
                        return (
                            <div key={boardgame.id} className="boardgame">
                                <h3><a href={`localhost:3000/boardgames/${boardgame.id}`}>{ boardgame.name }</a></h3>
                                <h4>{ boardgame.publisher }</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default Boardgames;