import { SwipeAction, TrailingActions } from 'react-swipeable-list';
import { IGasto } from '../interfaces/IGasto';

type Props = {
	eliminarGasto: (id: string) => void;
	gasto: IGasto;
}

export const TrailingActionsComponent = ({eliminarGasto, gasto}: Props) => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(gasto.id!!)}>
        Eliminar...
      </SwipeAction>
    </TrailingActions>
  );
};

export default TrailingActionsComponent;
