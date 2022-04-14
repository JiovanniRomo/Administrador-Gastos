import { SwipeAction, TrailingActions } from 'react-swipeable-list';

export const TrailingActionsComponent = () => {
	return (
		<TrailingActions>
			<SwipeAction onClick={() => console.log('Eliminando')}>
				Eliminar...
			</SwipeAction>
		</TrailingActions>
	);
};

export default TrailingActionsComponent;
