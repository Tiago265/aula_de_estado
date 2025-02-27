import React, { useState } from 'react'
import'./Conversao2.css'

function Conversao2() {
    const [km, setKm] = useState(0)
    const [milhas, setMilhas] = useState(0)
    const [leguas, setLeguas] = useState(0)
    
    function Conversao(){
        let entrada = Number(prompt("Km: "))
        setMilhas(entrada * 0.621371)
        setKm(entrada)
        setLeguas(entrada * 0.207124)
        setKm(entrada)
    }
  return (
    <div className='container-conversao2'> 
        <h2> Km ➡️ Milhas ➡️ léguas</h2>

        <p>
            Km: {km}      
        </p>
        <p>
            Léguas: {leguas}
        </p>
        <p>
            Milhas: {milhas} 
        </p>

        <button onClick={Conversao}>Converter</button>
    </div>
  )
}

export default Conversao2