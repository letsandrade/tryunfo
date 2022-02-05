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
      cardDeck: [{}],
    };
  }

  // usei arrow function pra não precisar fazer bind
  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validateSaveButton);
  }
  // problema a ser resolvido: this.state só é atualizado depois de fazer 1 alteração a mais do que deveria para setar isTrunfo para true

  // ref uso do unary operator para converter string em numero: https://www.techiediaries.com/javascript/convert-string-number-array-react-hooks-vuejs/
  validateSaveButton = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const maxSingleAttr = 90;
    const maxTotalAttr = 210;
    const arrOfAttr = [+attr1, +attr2, +attr3];
    const valSingle = (arrOfAttr.every((attr) => attr <= maxSingleAttr && attr >= 0));
    const valSum = ((+attr1 + +attr2 + +attr3) <= maxTotalAttr);
    const valText = (name.length > 0 && description.length > 0 && image.length > 0);

    const allChecks = valSingle && valSum && valText;

    this.setState(() => ({ isSaveButtonDisabled: !allChecks }));
  }

  handleSaveButton = (event) => {
    event.preventDefault();
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      isTrunfo,
      cardDeck,
    } = this.state;

    const cardObj = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      isTrunfo,
    };
    cardDeck.push(cardObj);
    this.setState({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: 'normal',
      isTrunfo: false,
    });
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
          onSaveButtonClick={ this.handleSaveButton }
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
