import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sw-component'
import Row from '../row'

export default class PlanesPage extends Component {
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
              left={<PlanetList onItemSelected={this.onItemSelected}/>}
              right={<PlanetDetails itemId={this.state.selectedItem}/>}
            />
        );
    }
}