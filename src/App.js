import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rarity: 'normal',
      isTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  // usei arrow function pra não precisar fazer bind
  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validateSaveButton());
  }

  // ref uso do unary op para converter string em numero: https://www.techiediaries.com/javascript/convert-string-number-array-react-hooks-vuejs/
  validateSaveButton = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const maxSingleAttr = 90;
    const maxTotalAttr = 210;
    const arrOfAttr = [+attr1, +attr2, +attr3];
    // usei como referencia o pr da tabata souto para a solução do every
    const valSingle = (arrOfAttr.every((attr) => attr <= maxSingleAttr && attr > 0));
    const valSum = ((+attr1 + +attr2 + +attr3) <= maxTotalAttr);
    const valText = (name.length > 0 && description.length > 0 && image.length > 0);
    const allChecks = valSingle && valSum && valText;
    this.setState(() => ({ isSaveButtonDisabled: !allChecks }));
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
      isSaveButtonDisabled,
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
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          // onSaveButtonClick={ onSaveButtonClick }
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
