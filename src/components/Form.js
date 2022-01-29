import React, { Component } from 'react';

class Form extends Component {
  /* constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {

    }
  }
   */
  render() {
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

export default Form;
