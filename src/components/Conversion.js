import React from 'react';

const Conversion = (props) => {
	return (
		<p className="conversion-results">
			<span>{props.inputWeight}{props.inputUnit}</span> converted to <span>{props.convertedWeight}kg</span>
		</p>
	);
}

export default Conversion;
