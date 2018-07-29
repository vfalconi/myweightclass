exports.iwf = {
	"men": {
		"56 kg": [ 0, 56 ],
		"62 kg": [ 56.01, 62 ],
		"69 kg": [ 62.01, 69 ],
		"77 kg": [ 69.01, 77 ],
		"85 kg": [ 77.01, 85 ],
		"94 kg": [ 85.01, 94 ],
		"105 kg": [ 94.01, 105 ],
		"105+ kg": 105.01
	},
	"women": {
		"48 kg": [ 0, 48 ],
		"53 kg": [ 48.01, 53 ],
		"58 kg": [ 53.01, 58 ],
		"63 kg": [ 58.01, 63 ],
		"69 kg": [ 63.01, 69 ],
		"75 kg": [ 69.01, 75 ],
		"90 kg": [ 75.01, 90 ],
		"90+ kg": 90.01
	},
	"youth_men": {
		"50 kg": [ 0, 50 ],
		"56 kg": [ 50.01, 56 ],
		"62 kg": [ 56.01, 62 ],
		"69 kg": [ 62.01, 69 ],
		"77 kg": [ 69.01, 77 ],
		"85 kg": [ 77.01, 85 ],
		"94 kg": [ 85.01, 94 ],
		"94+ kg": 94.01
	},
	"youth_women": {
		"44 kg": [ 0, 44 ],
		"48 kg": [ 44.01, 48 ],
		"53 kg": [ 48.01, 53 ],
		"58 kg": [ 53.01, 58 ],
		"63 kg": [ 58.01, 63 ],
		"69 kg": [ 63.01, 69 ],
		"75 kg": [ 69.01, 75 ],
		"75+ kg": 75.01
	}
}

exports.ipl = {
	"men": {
		"52 kg": [ 0, 52 ],
		"56 kg": [ 52.01, 56 ],
		"60 kg": [ 56.01 , 60 ],
		"67.5 kg": [ 60.01 , 67.5 ],
		"75 kg": [ 67.51 , 75 ],
		"82.5 kg": [ 75.01 , 82.5 ],
		"90 kg": [ 82.51 , 90 ],
		"100 kg": [ 90.01 , 100 ],
		"110 kg": [ 100.01 , 110 ],
		"125 kg": [ 110.01 , 125 ],
		"140 kg": [ 125.01 , 140 ],
		"140+ kg": 140.01
	},
	"women": {
		"44 kg": [ 0 , 44 ],
		"48 kg": [ 44.01, 48 ],
		"52 kg": [ 48.01, 52 ],
		"56 kg": [ 52.01, 56 ],
		"60 kg": [ 56.01, 60 ],
		"67.5 kg": [ 60.01, 67.5 ],
		"75 kg": [ 67.51, 75 ],
		"82.5 kg": [ 75.01, 82.5 ],
		"90 kg": [ 82.51, 90 ],
		"90+ kg": 90.01
	}
}

exports.ipf = {
	"men": {
		"53 kg": [ 0, 53 ],
		"59 kg": [ 53.01, 59 ],
		"66 kg": [ 59.01, 66 ],
		"74 kg": [ 66.01, 74 ],
		"83 kg": [ 74.01, 83 ],
		"93 kg": [ 83.01, 93 ],
		"105 kg": [ 93.01, 105 ],
		"120 kg": [ 105.01, 120 ],
		"120+ kg": 120.01
	},
	"women": {
		"43 kg": [ 0, 43 ],
		"47 kg": [ 43.01, 47 ],
		"52 kg": [ 47.01, 52 ],
		"57 kg": [ 52.01, 57 ],
		"63 kg": [ 57.01, 63 ],
		"72 kg": [ 63.01, 72 ],
		"84 kg": [ 72.01, 84 ],
		"84+ kg": 84.01
	}
}

exports.us_strongman = {
	"open_strongman": {
		"Lightweight": [ 0, 82.5 ],
		"Middleweight": [ 82.51, 100 ],
		"Heavyweight": [ 100.01, 125 ],
		"Superheavyweight": 125.01
	},
	"masters_strongman": {
		"Lightweight": [ 0, 100 ],
		"Heavyweight": 100.01
	},
	"teens_strongman": {
		"Lightweight": [ 0, 90 ],
		"Heavyweight": 90.01
	},
	"open_strongwoman": {
		"Lightweight": [ 0, 60 ],
		"Middleweight": [ 60.01, 75 ],
		"Heavyweight": [ 75.01, 90 ],
		"Superheavyweight": 90.01
	},
	"masters_strongwoman": {
		"Lightweight": [ 0, 60 ],
		"Middleweight": [ 60.01, 75 ],
		"Heavyweight": 75.01
	},
	"teens_strongwoman": {
		"Lightweight": [ 0, 67.5 ],
		"Heavyweight": 67.51
	}
}

exports.get = function(weight, sourceClasses) {
	const inputWeight = parseInt(weight, 10);
	const availableClasses = Object.keys(sourceClasses);
	const classes = Array.from(availableClasses.map((thisClass) => {
		return sourceClasses[thisClass];
	}));
	let weightClass = '';

	if (!weight) return null;

	classes.forEach((weightRange, key) => {
		if (weightRange instanceof Array) {
			const low = parseInt(weightRange[0], 10);
			const high = parseInt(weightRange[1], 10);
			if (inputWeight > low && inputWeight < high) weightClass = key;
		}

		if (parseInt(weightRange, 10) <= inputWeight) weightClass = key;
	});

	return availableClasses[weightClass];
}

exports.toKilos = function(weight, unit) {
	const weightInput = parseInt(weight, 10);
	let output = 0;

	// no weight was provided, so bail out
	if (!weight) return null;

	// if the weight is in kilos, our job here is done
	if (unit === 'kg') return weight;

	// convert pounds to kilos
	if (unit === 'lbs') output = Math.fround(weightInput / 2.207).toFixed(1);

	// convert kilos to pounds
	if (unit === 'st') output = Math.fround(weightInput / 0.157473).toFixed(1);

	// round to nearest single decimal
	return output;
}
