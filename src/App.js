import React, { Component } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 10,
      b: 20,
      list: [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
        { name: 'D' },
        { name: 'E' }
      ]
    }

    this.containers = [];
    this.performClick = this.performClick.bind(this);
  }

  componentDidMount() {
    // var container = ReactDOM.findDOMNode(this);
    console.log(this.containers);

    const drake = Dragula(this.containers, { copy: true });
    drake.on('drop', (element, target, source) => {
      target.removeChild(target.firstChild);
      this.containers = []
      // this.setState({
      //   list: [
      //     { name: 'E' },
      //     { name: 'B' },
      //     { name: 'C' },
      //     { name: 'D' },
      //     { name: 'A' }
      //   ]
      // });
    })

    
  }

  dragulaDecorator(componentBackingInstance) {
    if (componentBackingInstance) {
      this.containers.push(componentBackingInstance);
      // let options = {
      //   copy: true,
      //   moves: function (el, source, handle, sibling) {
      //     return true; // elements are always draggable by default
      //   },
      //   accepts: function (el, target, source, sibling) {
      //     return true; // elements can be dropped in any of the `containers` by default
      //   },
      //   invalid: function (el, handle) {
      //     return false; // don't prevent any drags from initiating by default
      //   },
      // };
      // const drake = Dragula([componentBackingInstance], options);
      // drake.on('drop', () => {
      //   console.log("dropped");
      // })
    }

  }

  performClick() {
    console.log("a");
    this.setState({
      a: 30
    })
  }

  render() {
    console.log(this.state.list[0]);
    return (
      <div className="App container">
        {
          this.state.list.map((i, idx) => {
            return (<div className={'item'} key={i.name} ref={this.dragulaDecorator.bind(this)}>
              <div><p>{i.name}</p>
                <button onClick={this.performClick}>Click me</button></div>
            </div>)
          })
        }
        <List abc={this.performClick} />
      </div>
    );
  }
}

export default App;
