import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="main-container">
        <h2 className="section_title">Adicionar carta</h2>
        <form className="form customshadow">
          <label className="form_label" htmlFor="name">
            Nome:
            <input
              className="form_input"
              data-testid="name-input"
              type="text"
              name="name"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label className="form_label" htmlFor="description">
            Descrição:
            <textarea
              className="form_input"
              name="description"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <div className="form_attrs_container">
            <label className="form_label" htmlFor="attr1">
              Ataque:
              <input
                className="form_attr form_input"
                data-testid="attr1-input"
                type="number"
                name="attr1"
                id="attr1"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
            <label className="form_label" htmlFor="attr2">
              Defesa:
              <input
                className="form_attr form_input"
                data-testid="attr2-input"
                type="number"
                id="attr2"
                name="attr2"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            <label className="form_label" htmlFor="attr3">
              Energia:
              <input
                className="form_attr form_input"
                data-testid="attr3-input"
                type="number"
                name="attr3"
                id="attr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <label className="form_label" htmlFor="image">
            Imagem:
            <input
              className="form_input"
              data-testid="image-input"
              name="image"
              id="image"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label className="form_label" htmlFor="rarity">
            Raridade
            <select
              className="form_input"
              data-testid="rare-input"
              name="rarity"
              id="rarity"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <div className="isTrunfo">
            <label htmlFor="isTrunfo">
              Super trunfo?
              { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : (
                  <input
                    className="form_input"
                    id="isTrunfo"
                    data-testid="trunfo-input"
                    name="isTrunfo"
                    type="checkbox"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                ) }
            </label>
          </div>
          <button
            className="submit_button"
            data-testid="save-button"
            type="submit"
            name="saveButton"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
