import React, { Component } from 'react'
import uuid from 'uuid'
import './../css/AddHomework.css'

let duplaState ={
	homework : {
			name: '',
			description:''
		},

	error: false
}

export default class AddHomework extends Component {

	state = { ...duplaState}

	onChangeForm = (e) => {
		
		let homework = {
			...this.state.homework,
			[e.target.name] : e.target.value
		}

		this.setState({homework})
	}


	onSubmitForm = (e) => {
		e.preventDefault();

		//Validar formulario
		const {name,description} = this.state.homework

		if(name === '' || description === ''){
				this.setState({
				error:true
			})
			
				return;
		}

		//Agregar ID Dinamico
		let newHomework = this.state.homework
		newHomework.id = uuid()

		//enviar tarea al APP
		this.props.getHomework(this.state.homework)

		//Vaciar formulario
		this.setState({...duplaState})
		


		
	}

	render() {
		const {error} = this.state
		return (
			<div className="AddHomework">
				<h2>Agregar Nueva Tarea</h2>

				<form onSubmit={this.onSubmitForm}>
					<div>
						<label>Ingrese el nombre: </label>
						<input
							type="text"
							placeholder="Nombre"
							name="name"
							value={this.state.homework.name}
							onChange={this.onChangeForm}
							/>
					</div>

					<div>
						<label>Ingrese la tarea: </label>
						<input 
							type="text"
							placeholder="Tarea"
							name="description"
							value={this.state.homework.description}
							onChange={this.onChangeForm}
							/>
					</div>

					<div>
						<input type="submit" value="enviar"
							/>
					</div>

					<div>
						{error ? <p className="Danger">Ingrese todos los campos obligatorios</p> : ''}
					</div>
				</form>
			</div>
		)
	}
}
