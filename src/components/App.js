import React ,{Component} from 'react'
import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const calculator = calculate(this.state, buttonName);
    this.setState({
      calculator,
    });
  }

  render() {
    const { total, next } = this.state;
    let show = total;
    if (next) {
      show = next;
    }
    if (show === null) {
      show = '0';
    }
    return (
      <>
        <Display result={show.toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>

    );
  }
}

export default App;
