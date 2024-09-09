import React, { Component } from 'react';

const list = ["Yes", "No", "Maybe", "Ask again later", "Outlook not so good", "Don't count on it", "Very doubtful", "Call the police", "I don't know", "Sorry, I can't answer that"]

const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    question: '',
    screen: 0,
    result: ''
  }

  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleResult = () => {
    let answer = list[this.getRandom(0, list.length - 1)];
    this.setState({
      result: answer
    })    
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        setScreen: (value) => this.setState({
          screen: value
        }),
        setQuestion: (value) => this.setState({
          question: value
        }),
        result: this.handleResult
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export { MyProvider, MyContext };