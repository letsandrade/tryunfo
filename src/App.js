import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: 'normal',
      isTrunfo: false,
      saveButtonEnabled: false,
    };
  }

  // usei arrow function pra não precisar fazer bind
  handleChange = ({ target }) => {
    console.log(target.value);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validateSaveButton());
  }

  validateSaveButton = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const maxSingleAttr = 90;
    const maxTotalAttr = 210;
    const valMax = () => {
      if (attr1 <= maxSingleAttr && attr2 <= maxSingleAttr && attr3 <= maxSingleAttr) {
        return true;
      }
    };
    const minAttr = 0;
    const valMin = () => {
      if (attr1 >= minAttr && attr2 >= minAttr && attr3 >= minAttr) {
        return true;
      }
    };
    const valSum = () => (attr1 + attr2 + attr3 <= maxTotalAttr);
    const valText = () => {
      if (name.length > 0 && description.length > 0 && image.length > 0) {
        return true;
      }
    };
    const allChecks = () => {
      if (valMax === true && valSum === true && valText === true && valMin === true) {
        return true;
      }
    };
    return this.setState({ saveButtonEnabled: allChecks });
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      isTrunfo,
      saveButtonEnabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ isTrunfo }
          onInputChange={ this.handleChange }
          saveButtonEnabled={ saveButtonEnabled }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ isTrunfo }
        />
      </div>
    );
  }
}

export default App;
