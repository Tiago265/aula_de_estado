import { useState } from 'react'
import './CalculadoradeGorjetas.css'


function CalculadoraDeGorjetas() {
    const [resultado, setResultado] = useState()
    function calculo(){
      let gorjeta = Number(prompt("Digite a porcentual de gorjeta"))
      
      setResultado((200 + (gorjeta * 2)).toFixed(2))
    }
  return (
    <div className='container-CalculadoradeGorjetas'>
        Calculadora de gorjetas
    
    <button onClick={calculo}>Calcular</button><br /><br />   

    valor da conta: R${200} <br />

    Gorjeta de % {gorjetar} <br />

    valor total: R$ {resultado}
    </div>
  )
}

export default CalculadoraDeGorjetas