import { useEffect, useState } from 'react';import { Header } from './components/Header';
import { IGasto } from './components/interfaces/IGasto';
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';
import { generarID } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import './index.css';

const App = () => {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);

	const [gastos, setGastos] = useState<IGasto[]>([]);

	const [gastoEditar, setGastoEditar] = useState<IGasto>({
		cantidad: 0,
		categoria: '',
		nombre: '',
	});

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setModal(true);
			setTimeout(() => {
				setAnimarModal(true);
			}, 500);
		}
	}, [gastoEditar]);

	const handleNuevoGasto = () => {
		setModal(true);
		setGastoEditar({ cantidad: 0, categoria: '', nombre: '' });
		setTimeout(() => {
			setAnimarModal(true);
		}, 500);
	};

	const guardarGasto = (gasto: IGasto) => {
		gasto.id = generarID();
		gasto.fecha = Date.now();
		setGastos([...gastos, gasto]);

		setAnimarModal(false);
		setModal(false);
	};

	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
				gastos={gastos}
			/>

			{isValidPresupuesto && (
				<>
					<main>
						<ListadoGastos
							gastos={gastos}
							setGastoEditar={setGastoEditar}
						/>
					</main>

					<div className="nuevo-gasto">
						<img
							src={IconoNuevoGasto}
							alt="icono nuevo gasto"
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}

			{modal && (
				<Modal
					setModal={setModal}
					animarModal={animarModal}
					setAnimarModal={setAnimarModal}
					guardarGasto={guardarGasto}
					gastoEditar={gastoEditar}
				/>
			)}
		</div>
	);
};

export default App;
