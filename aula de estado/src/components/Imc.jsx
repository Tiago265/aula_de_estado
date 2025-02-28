import {useState} from 'react'
import './Imc.css'
function Imc() {

  const [imc, setImc] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  function calcular(){
    let p = prompt("Kg: ")
    let a = prompt("M: ")
    setPeso((p))
    setAltura((a))
    setImc((p / (a * a))).toFixed(2);
  }
  return (
    <div className='container-imc'>
      <h2>Calculadora do imc</h2>

      Imc: {imc} <br />

      Peso: {peso} <br />

      Altura: {altura} <br /><br />
      
      <button onClick={calcular}>Calcular</button>
    </div>
  )
}

export default Imc