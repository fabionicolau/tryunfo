import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
      clearCard,
      isCard,
    } = this.props;

    return (
      <div className="cards-container">
        <h1 data-testid="name-card">{cardName}</h1>
        <img
          className="img"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">
          Atributo 1 ...
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          Atributo 2 ...
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          Atributo 3 ...
          {cardAttr3}
        </p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}

        <div>
          {isCard ? (
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => clearCard(cardName) }
            >
              Excluir
            </button>
          ) : (
            ''
          )}
        </div>
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
  isCard: PropTypes.bool.isRequired,
  clearCard: PropTypes.func,
};

Card.defaultProps = {
  clearCard: () => {},
};

export default Card;
