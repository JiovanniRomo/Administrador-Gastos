import { format } from "date-fns";

export const generarID = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha;
}

export const formatearFecha = (fecha: number) => {
    return format((new Date(fecha)), "dd/MM/yyyy")
}

