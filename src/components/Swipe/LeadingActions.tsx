import React, { Dispatch } from 'react';import { LeadingActions, SwipeAction } from 'react-swipeable-list';
import { IGasto } from '../interfaces/IGasto';

type IProps = {
	setGastoEditar: Dispatch<React.SetStateAction<IGasto>>;
	gasto: IGasto;
};

export const LeadingActionsComponent = ({ setGastoEditar, gasto }: IProps) => {
	return (
		<LeadingActions>
			<SwipeAction
				onClick={() =>
					setGastoEditar({
						cantidad: gasto.cantidad,
						nombre: gasto.nombre,
						categoria: gasto.categoria,
					})
				}>
				Editar...
			</SwipeAction>
		</LeadingActions>
	);
};
