import React from "react";

class AirCondition extends React.Component{

    constructor(props){
        super(props);
            this.state = {
                temperature: 20,
                powerOn: false
            };
       
    }
    increaseTemperature = () => {
        if(this.state.powerOn === true && this.state.temperature < 30){
    
            this.setState(prevState => ({
                temperature: prevState.temperature + 1
            }));
        }
    };
    decreaseTemperature = () => {
        if(this.state.powerOn === true && this.state.temperature > 16){
            this.setState(prevState => ({
                temperature: prevState.temperature - 1
        }   ));
      }
    };
    turnOn = () => {
        this.setState({
          powerOn: true
        });
      };
    
      turnOff = () => {
        this.setState({
          powerOn: false
        });
      };

    render() {
        const {temperature, powerOn} = this.state;

        return(
            <div className="main_container">
                <div className="innerContainer">
                  <div className="inner_cont1"><h2>Air Conditioner</h2></div>
                  <div className="inner_cont"><p>Haier <br />Thermocool</p></div>
                  <div className="innerCont2"><p>{temperature}^C</p></div>
                </div>
                              
                <br />

                <div className="emptydiv">
                    <div className="innerEmptydiv">
                      <div className="innerEmptydiv2"><p>Temperature: {temperature}</p></div>
                      <div className="innerCont3">
                        <button onClick={()=> (powerOn ? this.turnOff() : this.turnOn())}> 
                        {powerOn ? "Turn Off" : "Turn On"} </button> 
                      </div>      
                      <div className="firstButton">
                        <button onClick={this.decreaseTemperature} disabled={!powerOn}>Tempe-</button>
                      </div>
                      <div className="secondButton">
                        <button onClick={this.increaseTemperature} disabled={!powerOn}>Temp+</button>
                      </div>
                    </div>
                    
                </div>
                
            </div>
           
        );
    }

}
export default AirCondition;