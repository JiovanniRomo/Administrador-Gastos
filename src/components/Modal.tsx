import { useFormik } from 'formik';
import React, { Dispatch, FC, useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';
import { IGasto } from './interfaces/IFormulario';
import { Mensaje } from './Mensaje';


interface Props {
	setModal: Dispatch<React.SetStateAction<boolean>>;
	animarModal: boolean;
    setAnimarModal: Dispatch<React.SetStateAction<boolean>>
    guardarGasto: (gasto: IGasto) => void
}

export const Modal: FC<Props> = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState('')

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
