import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
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
      hasTrunfo: false,
      isCard: false,
      nameFilter: '',
      rareFilter: '',
      trunfoFilter: false,
      cards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.ValidateForm = this.ValidateForm.bind(this);
    this.clearCard = this.clearCard.bind(this);
    this.filterTrunfo = this.filterTrunfo.bind(this);
    this.filterRare = this.filterRare.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked } = target;

    if (target.name === 'cardTrunfo') {
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

  filterTrunfo() {
    const { cards } = this.state;
    return cards
      .filter((element) => element.cardTrunfo)
      .map((element, index) => (<Card
        key={ index }
        clearCard={ this.clearCard }
        { ...element }
      />));
  }

  filterRare() {
    const { rareFilter, nameFilter, cards } = this.state;
    let rare = [];
    if (rareFilter === '') {
      rare = cards;
    } else {
      rare = cards.filter((element) => element.cardRare === rareFilter);
    }

    return rare
      .filter((element) => element.cardName.includes(nameFilter))
      .map((elements, index) => (<Card
        key={ index }
        clearCard={ this.clearCard }
        { ...elements }
      />));
  }

  render() {
    const {
      trunfoFilter,
    } = this.state;

    return (
      <main className="main-container">
        <section className="formsPreview-container">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
          />
        </section>
        <section>
          <div>
            <Filter
              { ...this.state }
              onInputChange={ this.onInputChange }
            />

            {trunfoFilter
              ? this.filterTrunfo()
              : this.filterRare()}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
