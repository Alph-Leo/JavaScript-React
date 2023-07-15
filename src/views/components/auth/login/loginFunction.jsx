const { useState } = require("react")

const NameOff = (props) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    const handleFirstName = (event) => {
        const value = event.target.value
        setFirstName(value);
    }
    const handleLastName = (event) => {
        const value = event.target.value
        setLastName(value)
    }
    const handleEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }
    const handleDisplay = () => {
        const display = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        alert("First Name: "+ firstName+ "\nLast Name: "+ lastName+ "\nEmail: "+ email)
        console.log(display)
    }

    return(
        <div>
            <input type="text" value={firstName} placeholder="firstName" onChange={handleFirstName} />
            <input type="text" value={lastName} placeholder="lastName" onChange={handleLastName} />
            <input type="email" value={email} placeholder="email" onChange={handleEmail} />
            <button type="button" onClick={handleDisplay}><p>{handleDisplay}</p>Submit</button>
            
    
        </div>
    )
}

export default NameOff