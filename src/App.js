import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
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

  render() {
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card state={ this.state } />
      </div>
    );
  }
}

export default App;
