import React, { FC, useState } from 'react';
import { IFormulario, IProps } from './interfaces/IProps';
import { Mensaje } from './Mensaje';

export const NuevoPresupuesto: FC<IFormulario> = ({
	presupuesto,
	setPresupuesto,
	setIsValidPresupuesto
}) => {
	const [mensaje, setMensaje] = useState('');

	const handlePresupuesto = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!presupuesto || presupuesto < 0) {
			console.log('Not a number');
			setMensaje('No es un presupuesto valido');
			return;
		}

		setMensaje('');
    setIsValidPresupuesto(true)
	};

	return (
		<div className="contenedor-presupuesto sombra">
			<form className="formulario" onSubmit={handlePresupuesto}>
				<div className="campo">
					<label>Definir presupuesto</label>

					<input
						type="number"
						className="nuevo-presupuesto"
						placeholder="Agrega tu presupuesto"
						value={presupuesto}
						onChange={e => setPresupuesto(Number(e.target.value))}
					/>
				</div>

				<input type="submit" value="Agregar" />

				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
			</form>
		</div>
	);
};
