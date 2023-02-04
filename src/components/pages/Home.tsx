import { useState } from 'react'
export const Home = () => {
	const [valor, setValor] = useState<string>('0')
	const [valorCalculo, setValorCalculo] = useState<string>('')

	const signo = (signoACalcular: string) => {
		if (signoACalcular === '=') {
			const array = valorCalculo.split(' ')
			let resultado = 0
			let signo = ''
			for (let i = 0; i < array.length; i++) {
				if (parseInt(array[i])) {
					if (signo !== '') {
						if (signo === '+') {
							resultado += parseInt(array[i])
						} else if (signo === '-') {
							resultado -= parseInt(array[i])
						} else if (signo === 'x') {
							resultado *= parseInt(array[i])
						} else if (signo === '/') {
							resultado /= parseInt(array[i])
						}
					} else {
						resultado = parseInt(array[i])
					}
				} else {
					signo = array[i]
				}
			}
			setValor(resultado.toString())
		} else {
			setValor('')
		}
		setValorCalculo((prev) => prev + ' ' + signoACalcular + ' ')
	}

	const reset = () => {
		setValor('0')
		setValorCalculo('')
	}

	const num = (numero: number) => {
		if (valor === '0') {
			setValor('')
		}
		setValor((prev) => prev + numero)
		setValorCalculo((prev) => prev + numero)
	}

	return (
		<div className="container">
			<div className="container_resultado">
				<span className="texto_calculo">{valorCalculo}</span>
				<p className="texto_resultado"> {valor ?? '0'} </p>
			</div>
			<div className="container_calculadora">
				<div className="fila_calculadora">
					<div className="boton boton_nombre_calculadora">calculator</div>
					<div className="boton" onClick={reset}>
						C
					</div>
					<div className="boton" onClick={() => signo('/')}>
						/
					</div>
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
					<div className="boton" onClick={() => signo('x')}>
						x
					</div>
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
					<div className="boton" onClick={() => signo('-')}>
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
					<div className="boton" onClick={() => signo('+')}>
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
					<div className="boton" onClick={() => signo('=')}>
						=
					</div>
				</div>
			</div>
		</div>
	)
}
