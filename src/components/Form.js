import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  /* constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {

    }
  }
   */
  render() {
  /*   const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props; */
    return (
      <div className="main-container">
        <h2>Adicionar uma nova carta</h2>
        <form className="form">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="nome"
          />
          Descrição:
          <textarea data-testid="description-input" />
          Ataque:
          <input
            className="Ataque"
            data-testid="attr1-input"
            type="number"
            name="attr1"
          />
          Defesa:
          <input
            className="Defesa"
            data-testid="attr2-input"
            type="number"
            name="attr2"
          />
          Energia:
          <input
            className="Energia"
            data-testid="attr3-input"
            type="number"
            name="attr3"
          />
          Imagem:
          <input
            data-testid="image-input"
            type="text"
          />
          Raridade
          <select data-testid="rare-input">
            <option selected value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          Super trunfo?
          <input
            data-testid="trunfo-input"
            type="checkbox"
          />
          <button
            data-testid="save-button"
            type="button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  completeForm: PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
    hasTrunfo: PropTypes.bool,
    isSaveButtonDisabled: PropTypes.bool,
    onInputChange: PropTypes.func,
    onSaveButtonClick: PropTypes.func,
  }).isRequired,
};

export default Form;
