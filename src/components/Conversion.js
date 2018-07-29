import React from 'react';

const Conversion = (props) => {
	return (
		<p>{props.inputWeight}{props.inputUnit} converted to {props.convertedWeight}kg</p>
	);
}

export default Conversion;
