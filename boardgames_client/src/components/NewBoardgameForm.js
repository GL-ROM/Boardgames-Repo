import React, { Component } from 'react';

class NewBoardgameForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name" value={this.props.formInputs.name}
                    onChange={this.props.handleChange}
                />
                <label htmlFor="box_art">Box Art URL</label>
                <input
                    type="text"
                    id="box_art" value={this.props.formInputs.box_art}
                    onChange={this.props.handleChange}
                />
                 <label htmlFor="min_players">Min Players</label>
                <input
                    type="number"
                    id="min_players" value={this.props.formInputs.min_players}
                    onChange={this.props.handleChange}
                />
                <label htmlFor="max_players">Max Players</label>
                <input
                    type="number"
                    id="max_players" value={this.props.formInputs.max_players}
                    onChange={this.props.handleChange}
                />
                <label htmlFor="min_playtime">Min Playtime</label>
                <input
                    type="number"
                    id="min_playtime" value={this.props.formInputs.min_playtime}
                    onChange={this.props.handleChange}
                />
                <label htmlFor="max_playtime">Max Playtime</label>
                <input
                    type="number"
                    id="max_playtime" value={this.props.formInputs.max_playtime}
                    onChange={this.props.handleChange}
                />
                <label htmlFor="publisher">Publisher</label>
                <input
                    type="text"
                    id="publisher" value={this.props.formInputs.publisher}
                    onChange={this.props.handleChange}
                />
                <input type="submit" className="submit" />
            </form>
        )
    }
}

export default NewBoardgameForm;