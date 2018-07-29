const express = require('express');
const SERVER_PORT = 3333;
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
				'men': weightClassData.get(convertedWeight, weightClassData.iwf.men),
				'women': weightClassData.get(convertedWeight, weightClassData.iwf.women),
				'youth_men': weightClassData.get(convertedWeight, weightClassData.iwf.youth_men),
				'youth_women': weightClassData.get(convertedWeight, weightClassData.iwf.youth_women)
			},
			ipl: {
				'men': weightClassData.get(convertedWeight, weightClassData.ipl.men),
				'women': weightClassData.get(convertedWeight, weightClassData.ipl.women)
			},
			ipf: {
				'men': weightClassData.get(convertedWeight, weightClassData.ipf.men),
				'women': weightClassData.get(convertedWeight, weightClassData.ipf.women)
			},
			us_strongman: {
				'open_strongman': weightClassData.get(convertedWeight, weightClassData.us_strongman.open_strongman),
				'masters_strongman': weightClassData.get(convertedWeight, weightClassData.us_strongman.masters_strongman),
				'teens_strongman': weightClassData.get(convertedWeight, weightClassData.us_strongman.teens_strongman),
				'open_strongwoman': weightClassData.get(convertedWeight, weightClassData.us_strongman.open_strongwoman),
				'masters_strongwoman': weightClassData.get(convertedWeight, weightClassData.us_strongman.masters_strongwoman),
				'teens_strongwoman': weightClassData.get(convertedWeight, weightClassData.us_strongman.teens_strongwoman)
			}
		};
		const output = template(templateData);

		res.send(output);
	});

	app.listen(SERVER_PORT, () => console.log(`Example app listening on port ${SERVER_PORT}!`));
});
