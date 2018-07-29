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
      <div className="App">
        <form ref={this.inputForm} action="/" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="weight">Your weight</label>
          <input id="weight" type="number" name="weight" min="1" defaultValue={usersWeight} onBlur={(e) => this.handleBlur(e)} />
          <label>
            Kilograms
            <input type="radio" name="unit" value="kg" checked={usersUnit === 'kg' ? 'true': ''} onChange={(e) => this.handleChange(e)} />
          </label>
          <label>
            Pounds
            <input type="radio" name="unit" value="lbs" checked={usersUnit === 'lbs' ? 'true': ''} onChange={(e) => this.handleChange(e)} />
          </label>
          <label>
            Stones
            <input type="radio" name="unit" value="st" checked={usersUnit === 'st' ? 'true': ''} onChange={(e) => this.handleChange(e)} />
          </label>
        </form>
        {usersWeight !== '' && <Results convertedWeight={convertedWeight} usersWeight={usersWeight} usersUnit={usersUnit} />}
        {usersWeight === '' && hasSubmitted === true && <Errors />}
      </div>
    );
  }
}

export default App;
