export interface IGasto {
    nombre: string;
    cantidad: number;
    categoria: Icategoria | string;
    id?: string;
    fecha?: number;
}

type Icategoria = 'ahorro' | 'casa' | 'comida' | 'gastos' | 'ocio' | 'salud' | 'suscripciones'