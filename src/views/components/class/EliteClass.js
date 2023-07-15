class Ac {
    constructor(){
        this.temperature = 16
        this.powerOn = false
    }

    increaseTemperature () {
        if (this.powerOn === true && this.temperature < 30){
            this.temperature++
           return this.temperature
        
        }
    }

    decreaseTemperature () {
        if (this.powerOn === true && this.temperature > 16){
            this.temperature--
            return this.temperature
            
        }

    }
    turnOn () {
       if (this.powerOn = true){
       return this.powerOn
       }
    }
    turnOff () {
       if (this.powerOn = false){
       return this.powerOn
       }
    }

   

} 
let AcMain = new Ac()
AcMain.turnOn()
AcMain.increaseTemperature()
AcMain.increaseTemperature()

console.log(AcMain);
