import React, { Component } from 'react'
import Homework from './Homework'
import './../css/ListHomework.css'

export default class ListHomework extends Component {
	render() {
		const {homeworks,deleteHomework} = this.props
		
		return (
			<div className="ListHomework">
				{
					homeworks.map(homework => (
						<Homework 
							key={homework.id}
							id={homework.id}
							name = {homework.name}
							description = {homework.description}
							deleteHomework = {deleteHomework}
						/>
					))
				}
			</div>
		)
	}
}
