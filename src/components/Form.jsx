import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form id="form-container">
        <label htmlFor="card-name">
          Nome da Carta:
          <input id="card-name" data-testid="name-input" type="text" />
        </label>
        <label htmlFor="card-description">
          Descrição da carta:
          <textarea
            data-testid="description-input"
            name=""
            id="card-description"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="atributo1">
          Atributo 1:
          <input id="atributo1" data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input id="atributo2" data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input id="atributo3" data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="imagem">
          Imagem:
          <input id="imagem" data-testid="image-input" type="text" />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select id="raridade" data-testid="rare-input" name="">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="supertrunfo">
          <input id="supertrunfo" data-testid="trunfo-input" type="checkbox" />
          SuperTrunfo
        </label>
        <button data-testid="save-button" type="submit">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
