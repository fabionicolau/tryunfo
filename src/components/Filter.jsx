import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      nameFilter,
      rareFilter,
      onInputChange,
      trunfoFilter,
    } = this.props;

    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="nameFilter"
          value={ nameFilter }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-filter"
          type="text"
          name="rareFilter"
          value={ rareFilter }
          onChange={ onInputChange }
        >
          <option value="">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="trunfoFilter">
          <input
            data-testid="trunfo-filter"
            id="trunfoFilter"
            type="checkbox"
            name="trunfoFilter"
            value={ trunfoFilter }
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>
        <button type="button">Pesquisar</button>
      </div>
    );
  }
}

Filter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filter;
