import React from 'react';
import './calculator.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0, 
 
    };
  }

  
  pressNumberButton = (number) => {
    const { displayValue } = this.state;
    const newDisplayValue = displayValue === 0 ? number : displayValue + number;
    this.setState({ displayValue: newDisplayValue });

  };

  clearButton = () => {
    this.setState({ displayValue: 0 });
  };

  equalsButton = () => {
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
             <div className="classNameOne">
              <p><input type="text" value={displayValue} readOnly /></p>
              <p>{this.pressNumberButton}</p>
             </div>
        <div className="inner-container">
              
            <div id='first-holder'>
                <button onClick={this.clearButton}>C</button>
                <button onClick={()=>this.pressNumberButton('+/-')}>+/-</button>
                <button onClick={() => this.pressNumberButton('%')}>%</button>
                <button onClick={() => this.pressNumberButton('/')}>/</button>
            </div>
            <div id='second-holder'>
                <button onClick={() => this.pressNumberButton('7')}>7</button>
                <button onClick={() => this.pressNumberButton('8')}>8</button>
                <button onClick={() => this.pressNumberButton('9')}>9</button>
                <button onClick={() => this.pressNumberButton('*')}>X</button>
            </div>

            <div id='third-holder'>
                <button onClick={() => this.pressNumberButton('4')}>4</button>
                <button onClick={() => this.pressNumberButton('5')}>5</button>
                <button onClick={() => this.pressNumberButton('6')}>6</button>
                <button onClick={() => this.pressNumberButton('-')}>-</button>
            </div>

            <div id='forth-holder'>
                <button onClick={() => this.pressNumberButton('1')}>1</button>
                <button onClick={() => this.pressNumberButton('2')}>2</button>
                <button onClick={() => this.pressNumberButton('3')}>3</button>
                <button onClick={() => this.pressNumberButton('+')}>+</button>
            </div>

            <div id='fifth-holder'>
              <div id='zeroButton'>
                <button onClick={() => this.pressNumberButton('0')}>0</button>
              </div>
              <div id="equalButton">
                <button onClick={() => this.pressNumberButton('.')}>.</button>
                <span><button onClick={this.equalsButton}>=</button></span>
              </div>
            </div> 

        </div>  

        </div>
    
      
     
    );
  }
}

export default Calculator;