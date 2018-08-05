import React, { Component } from 'react';
import Results from './components/Results';
import Errors from './components/Errors';
import { toKilos } from './weightClassData';

class App extends Component {

  constructor() {
    super();

    this.inputForm = React.createRef();

    this.state = {
      weight: '',
      unit: 'kg',
      submitted: false
    };
  }

  componentWillMount() {
    const weight = localStorage.getItem('weight') || '';
    const unit = localStorage.getItem('unit') || 'kg';
		this.setState({ weight, unit });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('weight', nextState.weight);
    localStorage.setItem('unit', nextState.unit);
  }

  handleSubmit = (form) => {
    form.preventDefault();
    const weight = this.inputForm.current.elements.weight.value;
    const unit = this.inputForm.current.elements.unit.value;
    const submitted = true;
    this.setState({ weight, unit, submitted });
  }

  handleBlur = (input) => {
    const weight = input.target.value;
    this.setState({ weight });
  }

  handleChange = (input) => {
    const unit = input.target.value;
    this.setState({ unit });
  }

  render() {
    const usersWeight = this.state.weight;
    const usersUnit = this.state.unit;
    const hasSubmitted = this.state.submitted;
    const convertedWeight = toKilos(usersWeight, usersUnit);
    return (
			<React.Fragment>
      	<div className="form-wrapper">
					<form ref={this.inputForm} action="/" onSubmit={(e) => this.handleSubmit(e)}>
						<div className="input-row">
							<input className="text-input" id="weight" type="number" aria-label="Your weight" placeholder="Your weight" name="weight" min="1" defaultValue={usersWeight} onBlur={(e) => this.handleBlur(e)} />
							<div className="radio-set" role="group">
								<label className="radio-label">
									<input type="radio" value="kg" name="unit" id="unit_kg" onChange={(e) => this.handleChange(e)} checked={usersUnit === 'kg' ? 'true': ''} />
									<span className="input-indicator"></span>
									<span className="label-text">kilos</span>
								</label>
								<label className="radio-label">
									<input type="radio" value="lbs" name="unit" id="unit_lbs" onChange={(e) => this.handleChange(e)} checked={usersUnit === 'lbs' ? 'true': ''} />
									<span className="input-indicator"></span>
									<span className="label-text">pounds</span>
								</label>
								<label className="radio-label">
									<input type="radio" value="st" name="unit" id="unit_st" onChange={(e) => this.handleChange(e)} checked={usersUnit === 'st' ? 'true': ''} />
									<span className="input-indicator"></span>
									<span className="label-text">stones</span>
								</label>
							</div>
						</div>
					</form>
				</div>
        {usersWeight !== '' && <Results convertedWeight={convertedWeight} usersWeight={usersWeight} usersUnit={usersUnit} />}
        {usersWeight === '' && hasSubmitted === true && <Errors />}
			</React.Fragment>
    );
  }
}

export default App;
