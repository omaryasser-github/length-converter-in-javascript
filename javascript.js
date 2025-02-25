/*
1.meter => meter === 1
2.meter => kilometer = *0.001
3.meter => centi = *100
4.inches =>*39.37
5.feets =>*3.20084
6.yards => *1.09361
7.miles =>*0.000621371
*/

const meterToUnitFactor = {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    inches: 39.37,
    feet: 3.20084,
    yards: 1.09361,
    miles: 0.000621371,
}

const units = Object.keys(meterToUnitFactor)

const converts = (currentValue , currentUnit ) => {
  const valueInMeters = currentValue /  meterToUnitFactor[currentUnit]
  units.forEach( unit => {
     if(unit != currentUnit){
        if(valueInMeters === 0 ) {
            document.getElementById(unit).value = ""
            return
        }
        document.getElementById(unit).value = valueInMeters * meterToUnitFactor[unit]
     }
})
}

const displayInputs = ()=>{
   
    const InputHtmlCOntent = units.map(unit => 
        `
        <div class="input-group">
            <label for="${unit}">Enter length in ${unit} here</label>
            <input type="number" id="${unit}" placeholder="Enter length in ${unit} here">
        </div>
        `
    ).join("")

    document.querySelector(".input-group").innerHTML = InputHtmlCOntent
}

// more reusable 
const initLengthCOnverter = () => {
    displayInputs()
    units.forEach(unit => {
        document.getElementById(unit).addEventListener("input", function () {
            converts(this.value, this.id)
        })
    })

    document.querySelector("#reset").addEventListener("click", () => {
        units.forEach(unit => {
            document.getElementById(unit).value = ""
        })
    })

}
initLengthCOnverter()