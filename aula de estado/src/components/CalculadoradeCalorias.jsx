import { useState } from "react"
import './CalculadoradeCalorias.css'

function CalculadoradeCalorias() {  
    const [resultado, setResultado] = useState("nenhum valor inserido")
    function calcular(){
       let entrada = Number(prompt("Quanto tempo você andou? Obs: tem Que ser em minutos"))
       let caloria = 5 
       setResultado(caloria * entrada)
    }
  return (
    <div className='container-CalculadoradeCalorias'>
        <h2>Calculadora de calorias</h2>

        <button onClick={calcular}>Calcular</button><br /><br />

    Calorias: { resultado } 

    </div>
  )
}

export default CalculadoradeCalorias