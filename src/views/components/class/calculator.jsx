import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0, 
 
    };
  }

  
  handleDigitsClick = (number) => {
    const { displayValue } = this.state;
    const newDisplayValue = displayValue === 0 ? number : displayValue + number;
    this.setState({ displayValue: newDisplayValue });
  };

  handleClearClick = () => {
    this.setState({ displayValue: 0 });
  };

  handleEqualClick = () => {
    try {
      const result = eval(this.state.displayValue);
      this.setState({ displayValue: result.toString() });
    } catch (error) {
      this.setState({ displayValue: 'Error' });
    }
  };

  render() {
    const { displayValue } = this.state;

    return (
        <div id='outer-container'>
             <div id='classNameOne'>
        <input type="text" value={displayValue} readOnly />
        <div className="buttons">

            <div id='first-holder'>
                <button onClick={this.handleClearClick}>C</button>
                <button onClick={()=>this.handleDigitsClick('+/-')}>+/-</button>
                <button onClick={() => this.handleDigitsClick('%')}>%</button>
                <button onClick={() => this.handleDigitsClick('/')}>/</button>
            </div>
            <div id='second-holder'>
                <button onClick={() => this.handleDigitsClick('7')}>7</button>
                <button onClick={() => this.handleDigitsClick('8')}>8</button>
                <button onClick={() => this.handleDigitsClick('9')}>9</button>
                <button onClick={() => this.handleDigitsClick('*')}>*</button>
            </div>

            <div id='third-holder'>
                <button onClick={() => this.handleDigitsClick('4')}>4</button>
                <button onClick={() => this.handleDigitsClick('5')}>5</button>
                <button onClick={() => this.handleDigitsClick('6')}>6</button>
                <button onClick={() => this.handleDigitsClick('-')}>-</button>
            </div>

            <div id='forth-holder'>
                <button onClick={() => this.handleDigitsClick('1')}>1</button>
                <button onClick={() => this.handleDigitsClick('2')}>2</button>
                <button onClick={() => this.handleDigitsClick('3')}>3</button>
                <button onClick={() => this.handleDigitsClick('+')}>+</button>
            </div>


            <div id='fifth-holder'>
                <button onClick={this.handleEqualClick}>=</button>
                <button onClick={() => this.handleDigitsClick('.')}>.</button>
                <button onClick={() => this.handleDigitsClick('0')}>0</button>

            </div> 
        </div>
      </div>
        </div>
     
    );
  }
}

export default Calculator;