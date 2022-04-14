import React, { Dispatch } from "react"
import { IGasto } from "./IGasto"

export interface IProps {
    presupuesto: number
    setPresupuesto: Dispatch<React.SetStateAction<number>>
}

export interface IFormulario extends IProps {
    isValidPresupuesto?: boolean
    setIsValidPresupuesto: Dispatch<React.SetStateAction<boolean>>
    gastos ?: IGasto[]
}