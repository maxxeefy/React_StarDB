import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage,
         PlanesPage,
         StarshipsPage } from '../pages'
import {SwapiServiceProvider} from '../swapi-service-context';

export default class App extends Component  {

  state = {
    swapiService: new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? 
                        DummySwapiService : SwapiService
      return {
        swapiService: new Service()
      }
    })
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet />
            <PeoplePage />
            <PlanesPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}