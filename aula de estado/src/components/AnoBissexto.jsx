import { useState } from 'react'
import './AnoBissexto.css'

function AnoBissexto() {
    const [resultado, setResultado] =  useState('Resultado não calculado.')

    function lerAno(){
        let ano = Number(prompt("Digite o seu ano:"))
        if(ano % 4 == 0){
           setResultado("É bissexto")
        }else{
            setResultado("Ele não é um bissexto.")
        }
    }
  return (
    <div className='container-AnoBissexto'>
        <h2>ano bissexto</h2>

        <button onClick={lerAno}>Informar ano</button><br />

        <p>

        {resultado}

        </p>


    </div>
  )
}

export default AnoBissexto