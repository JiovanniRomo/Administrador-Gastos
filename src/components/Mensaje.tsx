import { FC } from "react"

interface IPropsMessage {
    tipo: "error" | "success"
}


export const Mensaje: FC<IPropsMessage> = ({tipo, children}) => {
  return (
    <div className={`alerta ${tipo}`}>
        {children}
    </div>
  )
}
