import React, { Component } from 'react';
import Conversion from './Conversion';
import weightclasses from '../weightClassData';

class Results extends Component {
	render() {
		return (
			<React.Fragment>
				{this.props.usersUnit !== 'kg' && <Conversion inputWeight={this.props.usersWeight} inputUnit={this.props.usersUnit} convertedWeight={this.props.convertedWeight} />}
				<section>
					<h1>IWF/USAW</h1>
					<dl>
						<dt>Men</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.iwf.men)}</dd>
						<dt>Women</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.iwf.women)}</dd>
						<dt>Youth Men</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.iwf.youth_men)}</dd>
						<dt>Youth Women</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.iwf.youth_women)}</dd>
					</dl>
				</section>
				<section>
					<h1>IPL/USPA</h1>
					<dl>
						<dt>Men</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.ipl.men)}</dd>
						<dt>Women</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.ipl.women)}</dd>
					</dl>
				</section>
				<section>
					<h1>IPF/USAPL</h1>
					<dl>
						<dt>Men</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.ipf.men)}</dd>
						<dt>Women</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.ipf.women)}</dd>
					</dl>
				</section>
				<section>
					<h1>US Strongman</h1>
					<dl>
						<dt>Open Strongman</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.open_strongman)}</dd>
						<dt>Masters Strongman</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.masters_strongman)}</dd>
						<dt>Teens Strongman</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.teens_strongman)}</dd>
						<dt>Open Strongwoman</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.open_strongwoman)}</dd>
						<dt>Masters Strongwoman</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.masters_strongwoman)}</dd>
						<dt>Teens Strongwoman</dt>
						<dd>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.teens_strongwoman)}</dd>
					</dl>
				</section>
			</React.Fragment>
		);
	}
}

export default Results;
