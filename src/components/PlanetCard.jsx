import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Planets from '../data/planets';
import MissionCard from './MissionCard';
import MissionsData from '../data/missions';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage, planetDecription } = this.props;
    const missionsByPlanet = Planets.reduce((result, planet) => {
      result[planet.name] = MissionsData.filter((mission) => mission
        .destination === planet.name);
      return result;
    }, {});
    return (
      <div data-testid="planet-card" id="planeta">
        <p data-testid="planet-name" id="planetName">{ planetName }</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          id={ planetName }
          className="op"
        />
        <h3>{planetDecription}</h3>
        <p>Missões</p>
        {missionsByPlanet[planetName].map((mission) => (
          <div key={ mission.name }>
            <MissionCard { ...mission } />
          </div>
        ))}
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetDecription: PropTypes.string.isRequired,
};
