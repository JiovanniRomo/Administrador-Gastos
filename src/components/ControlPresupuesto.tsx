import { useEffect, useState } from 'react';
import { IGasto } from './interfaces/IGasto';

type Props = {
	gastos: IGasto[];
	presupuesto: number;
};

export const ControlPresupuesto = ({ gastos, presupuesto }: Props) => {
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);

	useEffect(() => {
		const totalGastado = gastos.reduce(
			(total, gasto) => total + gasto.cantidad,
			0
		);

		const presupuestoDisponible = presupuesto - totalGastado;

		setGastado(totalGastado);
		setDisponible(presupuestoDisponible);
	}, [gastos, presupuesto]);

	const formatearCantidad = (cantidad: number) => {
		return cantidad.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<p>Grafica</p>
			</div>

			<div className="contenido-presupuesto">
				<p>
					<span>Presupuesto: </span>
					{formatearCantidad(presupuesto)}
				</p>

				<p>
					<span>Disponible: </span>
					{formatearCantidad(disponible)}
				</p>

				<p>
					<span>Gastado: </span>
					{formatearCantidad(gastado)}
				</p>
			</div>
		</div>
	);
};
