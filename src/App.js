import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.fun = this.fun.bind(this);
    this.sad = this.sad.bind(this);

    this.state = {
      count: this.props.initialValue,
    };
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }))
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  };

  fun() {
    this.setState((state) => ({
      smile: state.smile = ":)",
    }))
  }

  sad() {
    this.setState({
      smile: this.state.smile = ":(",
    });
  };

  render() {
    return (
    <>
      <button onClick={this.increment}>+</button>
      <button onClick={this.fun}>Fun!</button>
      <div>
          {this.state.count}
      </div>
      <div>
          {this.state.smile}
      </div>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.sad}>Sad...</button>
    </>
    );
  }
}
const rootElement = document.getElementById('root');
ReactDom.render(<App initialValue = {0} />, rootElement);

export default App;
