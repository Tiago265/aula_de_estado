import React, { useState } from 'react'
import './temperatura.css'

function Temperatura() {
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit , setfahrenheit] = useState(0)
    const [kelvin, setKelvin] = useState(0)
    function conversao(){
        let c = Number(prompt("Digite o valor de celsius para ser convertido:"))
        setfahrenheit(((c*1.8+32)).toFixed(1))
        setKelvin((c+273).toFixed(2))
        setCelsius(c)
    }
  return (
    <div className='container-temperatura'>
        <h2>Coonversão de Temperatura</h2>
   
        Celsius: {celsius} <br />

        Fahrenheit: {fahrenheit} <br />

        Kelvin: {kelvin} <br /><br />

       <button onClick={conversao}>Converter</button>
    </div>

  )
}

export default Temperatura
   