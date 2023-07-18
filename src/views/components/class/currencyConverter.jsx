import { useState } from "react";
import './currencyConverter.css'

function ConvertCurrency (){
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState(700)

    const handleAmount = (e) => {
        const amount = e.target.value
        setAmount(amount)
    }
    const handleExRate = (e) => {
        const rate = e.target.value
        setExchangeRate(rate)
       
    }

    return(
        <div className="container">
                        
            <input type="text" name="" value={amount} onChange={handleAmount} />
            
            <input type="text" name="" value={exchangeRate} onChange={handleExRate} />
            <p>USD${amount } equals #{ amount * exchangeRate}</p>
        </div>
        
    )
}
export default ConvertCurrency;
