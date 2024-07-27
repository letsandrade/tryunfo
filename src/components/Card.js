import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const checkTrunfo = cardTrunfo;

    return (
      <div className="card_container customshadow">
        <h2 data-testid="name-card">{cardName}</h2>
        <div className="card_img_container insetshadow">
          <img
            data-testid="image-card"
            className="card_img"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <p data-testid="description-card">{cardDescription}</p>
        <h3 data-testid="attr1-card">
          Ataque:
          {' '}
          {cardAttr1}
        </h3>
        <h3 data-testid="attr2-card">
          Defesa:
          {' '}
          {cardAttr2}
        </h3>
        <h3 data-testid="attr3-card">
          Energia:
          {' '}
          {cardAttr3}
        </h3>
        <h4 data-testid="rare-card">{cardRare}</h4>
        {checkTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
