import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" id="sistema">
        {planets.map((p) => (
          <PlanetCard
            key={ p.name }
            planetName={ p.name }
            planetImage={ p.image }
            planetDecription={ p.description }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
