import { useState } from 'react'
import './Aviso.css'
import React from 'react'
function Estados() {
    const [usuario, setUsuario] = useState()
    const [nome, setNome] = useState()
    const [senha, setsenha] = useState()
  
    function lerNome(){
      let nome = prompt("digie seu nome (vou ignorar): ")
      setNome(nome)
    }
    function lerUsuario(){
      let resposta = prompt("Digite o novo usuario: ")
      setUsuario(resposta)
  
      let pw = prompt("digite sua senha: ")
      let pw2 = prompt("confirme sua senha: ")
      if(pw == pw2){
        setsenha(pw)
      }else{
        alert("senha diferente")
      }
    }
    
  return (
    <div className="container-app">
      <h1>Estados</h1>
      Nome: {nome} 
      <div>
      Usuário: {usuario}
      </div>
      <div>
      Senha: {senha} 
      </div>
      <button onClick={lerNome}>Trocar nome</button><br /><br />
      <button onClick={lerUsuario}>Trocar usuário</button>
    </div>
  )
}

export default Estados