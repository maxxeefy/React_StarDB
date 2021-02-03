import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-component'
import Row from '../row'

export default class StarshipsPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
        console.log('ea')
    }

    render() {
        const {selectedItem} = this.state;
        return (
            <Row 
              left={<StarshipList onItemSelected={this.onItemSelected}/>}
              right={<StarshipDetails itemId={this.state.selectedItem}/>}
            />
        );
    }
}