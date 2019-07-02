import React from 'react';
import './../css/Homework.css'

const Homework = ({name,description,deleteHomework,id}) => {
	return (
		<div className="Homework">
			<p>{name}</p>
			<p>{description}</p>
			<button onClick={ () => deleteHomework(id)}>Eliminar</button>
		</div>
	);
};

export default Homework;