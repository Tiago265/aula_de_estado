import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Juca")
  const [nome, setNome] = useState("seu nome")

  function lerNome(){
    let nome = prompt("digie seu nome (vou ignorar): ")
    setNome(nome)
  }
  function lerUsuario(){
    let resposta = prompt("Digite o novo usuario: ")
    setUsuario(resposta)
  }

  return (
    <>
      <h1>Estados</h1>
      Nome: {nome} 
      <div>
      Usuário: {usuario}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuário</button>
        
    </>
  )
}

export default App