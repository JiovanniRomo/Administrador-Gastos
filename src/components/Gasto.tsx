import { 
  SwipeableList, 
  SwipeableListItem, 
  LeadingActions, 
  SwipeAction, 
  TrailingActions 
} from 'react-swipeable-list';

import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from '../helpers';
import { IGasto } from './interfaces/IGasto';

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';
import TrailingActionsComponent from './Swipe/TrailingActions';
import { LeadingActionsComponent } from './Swipe/LeadingActions';
import React, { Dispatch } from 'react';


type IProps = {
    gasto: IGasto
    setGastoEditar: Dispatch<React.SetStateAction<IGasto>>
    eliminarGasto: (id: string) => void
}

const iconoSwitch = (categoria: string) => {
  switch(categoria) {
    case 'ahorro':
      return IconoAhorro;

    case 'casa':
      return IconoCasa;

    case 'comida':
      return IconoComida;

    case 'gastos':
      return IconoGastos;

    case 'ocio':
      return IconoOcio;

    case 'salud':
      return IconoSalud;

    case 'suscripciones':
      return IconoSuscripciones;

    default:
      return IconoGastos;
  }
}

export const Gasto = ({ gasto, setGastoEditar, eliminarGasto }: IProps) => {

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={ <LeadingActionsComponent setGastoEditar={setGastoEditar} gasto={gasto}/> }
        trailingActions={ <TrailingActionsComponent eliminarGasto={eliminarGasto} gasto={gasto}/> }
      >
        <div className='gasto sombra'>
          <div className="contenido-gasto">
            <img src={iconoSwitch(gasto.categoria)} alt="Icono Gasto" className='categoria'/>
            <div className="descripcion-gasto">
              <p className='nombre-gasto'>
                {gasto.nombre}  
              </p>

              <p>
                Agregado el: {''} 
                { 
                  formatearFecha(gasto.fecha!!) 
                }
              </p>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
