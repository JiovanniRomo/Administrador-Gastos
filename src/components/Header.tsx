import { FC } from 'react';
import { ControlPresupuesto } from './ControlPresupuesto';
import { IFormulario } from './interfaces/IProps';
import { NuevoPresupuesto } from './NuevoPresupuesto';

export const Header: FC<IFormulario> = ({
	presupuesto,
	setPresupuesto,
	isValidPresupuesto,
	setIsValidPresupuesto,
	gastos
}) => {

	return (
		<header>
			<h1>Planificador de Gastos</h1>

			{isValidPresupuesto ? (
				<ControlPresupuesto 
					gastos={gastos!!}
					presupuesto={presupuesto}
				/>
				) : (
				<NuevoPresupuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setIsValidPresupuesto={setIsValidPresupuesto}
				/>
			)}
		</header>
	);
};
