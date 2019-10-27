import React, {Component, createContext} from 'react';
import logo from './logo.svg';
import './App.css';

const MyContext = createContext();
const Buffer = createContext()

class Leaf extends Component {
  static contextType = MyContext;
  render() {
    const battery = this.context
    return (
      <div>{battery}</div>
    )
  };

  getContextVal = (val) => {
    return (
      <Buffer.Consumer>
        {
          onLine => (<div>
            context: {val} buffer: {String(onLine)}
          </div>)
        }
      </Buffer.Consumer>
    )
  };
  // getVal = (val) => {
  //   return (
  //     <div>{String(val)}</div>
  //   )
  // }
}


class Middle extends Component {
  render() {
    return <Leaf/>
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contextVal: 60,
      isValue: false
    };
    this.addContext = this.addContext.bind(this)
    this.showBuffer = this.showBuffer.bind(this)
  }

  render() {
    const {contextVal, isValue} = this.state
    return (
      <MyContext.Provider value={contextVal}>
        <Buffer.Provider value={isValue}>
          <button type='button'
                  onClick={this.addContext}>addContext
          </button>
          <button type='button'
                  onClick={this.showBuffer}>showBuffer
          </button>
          <Middle></Middle>
        </Buffer.Provider>
      </MyContext.Provider>
    )
  };

  addContext() {
    this.setState({
      contextVal: ++this.state.contextVal
    })
  }

  showBuffer() {
    this.setState({
      isValue: !this.state.isValue
    })
  }

}

export default App;
