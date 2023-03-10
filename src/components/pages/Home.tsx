import { useState } from 'react'
export const Home = () => {
	const [valor, setValor] = useState<string>('0')
	const [calculo, setCalculo] = useState('')

	const sumar = () => {
		setCalculo((prev) => prev + ' + ')
		// setValor(valor)
	}

	const restar = () => {
		setValor(valor)
	}

	const reset = () => {
		setValor('0')
		setCalculo('')
	}

	const num = (numero: number) => {
		if (valor.length === 1 && valor === '0') {
			setValor('')
			setCalculo('')
		}
		setValor((prev) => prev + numero)
		setCalculo((prev) => prev + numero)
	}

	return (
		<div className="container">
			<div className="container_resultado">
				<span style={{ display: 'flex', justifyContent: 'flex-end' }}>
					{calculo}
				</span>
				<p className="texto_resultado"> {valor ?? '0'} </p>
			</div>
			<div className="container_calculadora">
				<div className="fila_calculadora">
					<div className="boton boton_nombre_calculadora">calculator</div>
					<div className="boton" onClick={reset}>
						C
					</div>
					<div className="boton">/</div>
				</div>
				<div className="fila_calculadora">
					<div className="boton" onClick={() => num(7)}>
						7
					</div>
					<div className="boton" onClick={() => num(8)}>
						8
					</div>
					<div className="boton" onClick={() => num(9)}>
						9
					</div>
					<div className="boton">x</div>
				</div>
				<div className="fila_calculadora">
					<div className="boton" onClick={() => num(4)}>
						4
					</div>
					<div className="boton" onClick={() => num(5)}>
						5
					</div>
					<div className="boton" onClick={() => num(6)}>
						6
					</div>
					<div className="boton" onClick={restar}>
						-
					</div>
				</div>
				<div className="fila_calculadora">
					<div className="boton" onClick={() => num(1)}>
						1
					</div>
					<div className="boton" onClick={() => num(2)}>
						2
					</div>
					<div className="boton" onClick={() => num(3)}>
						3
					</div>
					<div className="boton" onClick={sumar}>
						+
					</div>
				</div>
				<div className="fila_calculadora">
					<div className="boton" onClick={() => num(0)}>
						00
					</div>
					<div className="boton" onClick={() => num(0)}>
						0
					</div>
					<div className="boton">.</div>
					<div className="boton">=</div>
				</div>
			</div>
		</div>
	)
}
