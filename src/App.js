import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

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
      cards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.ValidateForm = this.ValidateForm.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked } = target;
    const valor = target.type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    }, () => this.ValidateForm());
  }

  onSaveButtonClick(event) {
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
    };
    event.preventDefault();
    this.setState((previous) => ({
      cards: [...previous.cards, newCard],
    }));
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
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

  render() {
    const {
      cards,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          { ...this.state }
        />

        {cards.map((element, index) => (<Card
          key={ index }
          { ...element }
        />))}
      </div>
    );
  }
}

export default App;
