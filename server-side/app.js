const express = require('express');
const app = express();
const fs = require('fs');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const weightClassData = require('../src/weightClassData');

fs.readFile('./results.html', 'utf-8', (error, source) => {
	const template = handlebars.compile(source);
	const parser = bodyParser.urlencoded({ extended: false });

	app.get('/', (req, res) => {
		res.send(template({}));
	});

	app.post('/', parser, (req, res) => {
		const inputWeight = req.body.weight;
		const inputUnit = req.body.unit;
		const convertedWeight = weightClassData.toKilos(inputWeight, inputUnit);
		const templateData = {
			weight: inputWeight,
			unit: inputUnit,
			isKilos: (inputUnit === 'kg'),
			isPounds: (inputUnit === 'lbs'),
			isStones: (inputUnit === 'st'),
			iwf: {
				'men': weightClassData.get(convertedWeight, 'iwf', 'men'),
				'women': weightClassData.get(convertedWeight, 'iwf', 'women'),
				'youth_men': weightClassData.get(convertedWeight, 'iwf', 'youth_men'),
				'youth_women': weightClassData.get(convertedWeight, 'iwf','youth_women' )
			},
			ipl: {
				'men': weightClassData.get(convertedWeight, 'ipl', 'men'),
				'women': weightClassData.get(convertedWeight, 'ipl', 'women')
			},
			ipf: {
				'men': weightClassData.get(convertedWeight, 'ipf', 'men'),
				'women': weightClassData.get(convertedWeight, 'ipf', 'women')
			},
			us_strongman: {
				'open_strongman': weightClassData.get(convertedWeight, 'us_strongman', 'open_strongman'),
				'masters_strongman': weightClassData.get(convertedWeight, 'us_strongman', 'masters_strongman'),
				'teens_strongman': weightClassData.get(convertedWeight, 'us_strongman', 'teens_strongman'),
				'open_strongwoman': weightClassData.get(convertedWeight, 'us_strongman', 'open_strongwoman'),
				'masters_strongwoman': weightClassData.get(convertedWeight, 'us_strongman', 'masters_strongwoman'),
				'teens_strongwoman': weightClassData.get(convertedWeight, 'us_strongman', 'teens_strongwoman')
			}
		};
		const output = template(templateData);

		res.send(output);
	});

	app.listen(3000, () => console.log('Example app listening on port 3000!'));
});
