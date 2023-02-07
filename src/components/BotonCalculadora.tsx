import React from 'react'

interface Props {
	nombre: string
	funcion: (num?: string) => void
}

export const BotonCalculadora = ({ nombre, funcion }: Props) => {
	return (
		<div className="boton" onClick={() => funcion()}>
			{nombre}
		</div>
	)
}
