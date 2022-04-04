import { useState } from 'react'
import { Header } from './components/Header'
import { IGasto } from './components/interfaces/IGasto'
import { Modal } from './components/Modal'
import { generarID } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

const App = () => {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState<IGasto[]>([])

  const handleNuevoGasto = () => {
    console.log('Click click')
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = (gasto: IGasto) => {

    gasto.id = generarID();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);
    setModal(false);
  }

  return (
    <div className="App">
      <Header 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {
        isValidPresupuesto && (
          <div className="nuevo-gasto">
            <img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto}/>
          </div>
        )
      }

      { 
        modal && 
        <Modal
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
          />
      }

    </div>
  )
}

export default App
