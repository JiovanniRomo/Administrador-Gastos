import { Dispatch, FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { IGasto } from './interfaces/IGasto';
import { Mensaje } from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';


interface Props {
	setModal: Dispatch<React.SetStateAction<boolean>>;
	animarModal: boolean;
    setAnimarModal: Dispatch<React.SetStateAction<boolean>>
    guardarGasto: (gasto: IGasto) => void
    gastoEditar: IGasto
}

export const Modal: FC<Props> = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar }) => {

    const [mensaje, setMensaje] = useState('')

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            formik.values.cantidad = gastoEditar.cantidad
            formik.values.categoria = gastoEditar.categoria
            formik.values.nombre = gastoEditar.nombre
            formik.values.fecha = gastoEditar.fecha
            formik.values.id = gastoEditar.id
        }
    }, [])

    const ocultarModal = () => {

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false);
        }, 500)
	};

    const validate = (values: IGasto) => {
        const errors = { vacio: '' }
        if([values.nombre, values.categoria, values.cantidad].includes('')) {
            errors.vacio = "Todos los campos son obligatorios"

            setMensaje("Todos los campos son obligatorios")

            setTimeout(() => {
                setMensaje('')
            }, 3000)
        }
        return { };
    }
    
    const formik = useFormik<IGasto>({
        initialValues: {
            cantidad: 0,
            categoria: '',
            nombre: ''
        },
        validate,
        onSubmit: values => guardarGasto(values)
    })

    const { values: {cantidad, categoria, nombre} } = formik


	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img
					src={CerrarBtn}
					alt="cerrar modal"
					onClick={ocultarModal}
				/>
			</div>

			<form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} onSubmit={formik.handleSubmit}>
				<legend>Nuevo gasto</legend>

                { mensaje && 
                    <Mensaje tipo='error'>
                        Todos los campos son obligatorios
                    </Mensaje>
                }

                <div className="campo">
                    <label htmlFor='nombre'>Nombre gasto</label>
                    <input
                    	type="text"
                    	id="nombre"
                        name='nombre'
                        value={nombre}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="campo">
                    <label htmlFor='cantidad'>Cantidad del gasto</label>
                    <input
                    	type="number"
                    	id="cantidad"
                        name='cantidad'
                        placeholder='Agrega la cantidad del gasto'
                        value={cantidad}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="campo">
                    <label htmlFor='categoria'>Categoria del gasto</label>
                    <select id="categoria" name='categoria' value={categoria} onChange={formik.handleChange}>
                        <option value="">--- Seleccione</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="ocio">Ocio</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Agregar gasto" />
			</form>
		</div>
	);
};
