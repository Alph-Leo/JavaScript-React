import React from "react";

class LoginClassComponent extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            name: "",
            displayValue: "",
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            streetNo: "",
            streetName: "",
            country: "",
            state: ""

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleKey = this.handleKey.bind(this)
    }
    handleChange(e){
        this.setState({name: e.target.value})
        this.setState({firstName: e.target.value})
        this.setState({lastName: e.target.value})
        this.setState({email: e.target.value})
        this.setState({address: e.target.value})
        this.setState({streetNo: e.target.value})
        this.setState({streetName: e.target.value})
        this.setState({country: e.target.value})
        this.setState({state: e.target.value})
    }
    handleKey(e){
        if(e.key === "Enter"){
            const methodName = this.state.name
            const methodValue = this[methodName]?.()
            this.setState({displayValue: methodValue || ""})
        }
    }
    handleEliteGuys(){
        return(
            <div>
                <p style={{color: 'black'}}> Hi Malik</p>
            </div>
        )

    }
    firstGreeting(){
        return(
            <div>
                <p style={{color: 'purple'}}> Hi How are you doing</p>
            </div>
        )

    }
    secondGreetings(){
        return(
            <div>
                <p style={{color: 'blue'}}> Hello There!</p>
            </div>
        )

    }
    handleNatives(){
        return(
            <div>
                <p style={{color: 'green'}}> Hi Natives</p>
            </div>
        )

    }
    handleRandom(){
        return(
            <div>
                <p style={{color: 'yellow'}}> Hi Anyone</p>
            </div>
        )

    }
    render(){
        return(
            
            <div>
                <form>
                <label>FirstName</label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                {/* <p>{this.state.displayValue}</p> */}
                <label>LastName</label>
                <input type="text" name="lastName" value={this.state.firstName} onChange={this.handleChange}/>
                {/* <p>{this.state.displayValue}</p> */}
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                {/* <p>{this.state.displayValue}</p> */}
                <p>Address</p>
                <label>StreetNo</label>
                <input type="text" name="streetNo" value={this.state.streetNo} onChange={this.handleChange}/>
                {/* <p>{this.state.displayValue}</p> */}
                <label>StreetName</label>
                <input type="text" name="streetName" value={this.state.streetName} onChange={this.handleChange} />
                {/* <p>{this.state.displayValue}</p> */}
                <label>Country</label>
                <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
                {/* <p>{this.state.displayValue}</p> */}
                <label>State</label>
                <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />
                {/* <p>{this.state.displayValue}</p> */}
                </form>
                {/* <p style={{textAlign: "center"}}>Hi Mr </p> */}
                {/* <p style={{}}>{this.state.displayValue}</p> */}
                {/* <label>Name</label>
                <input
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange}
                onKeyPress={this.handleKey}
                /> */}
                
            </div>
        )
    }

}
export default LoginClassComponent;