import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      isCard: false,
      nameFilter: '',
      rareFilter: 'todas',
      cards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.ValidateForm = this.ValidateForm.bind(this);
    this.clearCard = this.clearCard.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked } = target;
    if (checked) {
      this.setState({
        hasTrunfo: true,
      });
    }

    const valor = target.type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    }, () => this.ValidateForm());
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isCard: true,
    };

    this.setState((previous) => ({
      cards: [...previous.cards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isCard: false,
      isSaveButtonDisabled: true,
    }));
  }

  ValidateForm() {
    const {
      cardName,
      cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2,
      cardAttr3,
    } = this.state;

    const limitCard = 90;
    const sum = 210;
    const atributo1 = parseInt(cardAttr1, 10);
    const atributo2 = parseInt(cardAttr2, 10);
    const atributo3 = parseInt(cardAttr3, 10);

    if (cardName === ''
      || cardDescription === '' || cardImage === '' || cardRare === ''
      || atributo1 > limitCard || atributo2 > limitCard || atributo3 > limitCard
      || atributo1 + atributo2 + atributo3 > sum
      || atributo1 < 0 || atributo2 < 0 || atributo3 < 0
    ) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  clearCard(removeItem) {
    const { cards } = this.state;
    const temp = cards.filter((element) => element.cardName !== removeItem);
    this.setState({
      cards: temp,
    });

    const cardsIncludesTrunfo = temp.some((element) => (element.cardTrunfo));
    if (cardsIncludesTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    const {
      cards,
      nameFilter,
    } = this.state;

    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />

        <Filter
          { ...this.state }
          onInputChange={ this.onInputChange }
          handleFilter={ this.handleFilter }
        />

        {cards
          .filter((element) => element.cardName.includes(nameFilter))
          .map((element, index) => (<Card
            key={ index }
            clearCard={ this.clearCard }
            { ...element }
          />))}
      </div>
    );
  }
}

export default App;
