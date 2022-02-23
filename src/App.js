import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked } = target;
    const valor = target.type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    });
  }

  // onSaveButtonClick(event) {
  //   event.preventDefault();
  //   this.setState((previous) => ({
  //     cards: [...previous.cards, newCard],
  //   }));
  // }

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
    } = this.state;

    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
