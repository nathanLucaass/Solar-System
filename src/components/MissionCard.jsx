import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">{name}</p>
        <p data-testid="mission-year" className="mission-year">{year}</p>
        <p data-testid="mission-country" className="mission-country">{country}</p>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};
