
import './App.css'
import AnoBissexto from './components/AnoBissexto'
import Aviso from './components/Aviso'
import CalculadoradeCalorias from './components/CalculadoradeCalorias'
import CalculadoraDeGorjetas from './components/CalculadoraDeGorjetas'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Estados from './components/Estados'
import Imc from './components/Imc'
import Temperatura from './components/Temperatura'

function App() {
  return (
    <>
      < CalculadoraDeGorjetas/>
      <CalculadoradeCalorias/>
      <AnoBissexto />
      <Imc />
      <Temperatura />
      <Aviso /> 
      <Conversao />
      <Conversao2 />
      <Estados />
    </>
  )
}

export default App