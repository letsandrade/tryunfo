import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: 'normal',
      isTrunfo: false,
      isSaveButtonDisabled: true,
      cardDeck: [],
      hasTrunfo: false,
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

  onSaveButtonClick = (event) => {
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

    this.setState((prevState) => ({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: 'normal',
      isTrunfo: false,
      isSaveButtonDisabled: true,
      cardDeck: [...prevState.cardDeck, cardObj],
    }), this.checkTrunfo);
  }

  checkTrunfo = () => {
    const { cardDeck } = this.state;
    const valTrunfo = cardDeck.some((item) => item.isTrunfo);
    this.setState({
      hasTrunfo: valTrunfo,
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
      hasTrunfo,
      cardDeck,
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
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <section className="full-deck">
          <h2>Deck Completo</h2>
          <div className="cards-deck">
            {cardDeck.length > 0 ? (cardDeck.map((card) => (
              <Card
                key={ card.name }
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.image }
                cardRare={ card.rarity }
                cardTrunfo={ card.isTrunfo }
              />
            ))) : ''}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
