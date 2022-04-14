import { Dispatch } from 'react';
import { Gasto } from './Gasto';
import { IGasto } from './interfaces/IGasto';

//Es mejor practica declarar types de esta manera y NO con FC<IProps>
type IProps = {
	gastos: IGasto[];
	setGastoEditar: Dispatch<React.SetStateAction<IGasto>>
};

export const ListadoGastos = ({ gastos, setGastoEditar }: IProps) => {
	return (
		<div className="listado-gastos contenedor">
			<h2>{gastos.length ? 'Gastos' : 'Aun no tienes gastos!'}</h2>

			{gastos.map(gasto => (
				<Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar}/>
			))}
		</div>
	);
};
