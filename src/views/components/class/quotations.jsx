import { useState } from "react";

function Quotation() {
    const[quotes, setQuotes] = useState("")


    const handleQuotes = (e) => {
        const newQuote = e.target.value
        setQuotes(newQuote)



    }





    return(
        <div className="main-container">
            <button>
                
            <input type="text" name="" value={quotes} placeholder="Enter your quotes here" onChange={handleQuotes} />
            </button>

            <p>{quotes}</p>


        </div>
    )

}
export default Quotation;