import React, { Component } from 'react';
import Conversion from './Conversion';
import weightclasses from '../weightClassData';

class Results extends Component {
	render() {
		return (
			<React.Fragment>
				{this.props.usersUnit !== 'kg' && <Conversion inputWeight={this.props.usersWeight} inputUnit={this.props.usersUnit} convertedWeight={this.props.convertedWeight} />}
				<div className="results-wrapper">
					<section className="results-section">
						<h1 className="results-heading">IWF/USAW</h1>
						<dl className="federation">
							<div className="division">
								<dt className="division-title">Men</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.iwf.men)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Women</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.iwf.women)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Youth Men</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.iwf.youth_men)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Youth Women</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.iwf.youth_women)}</tt></dd>
							</div>
						</dl>
					</section>
					<section className="results-section">
						<h1 className="results-heading">IPL/USPA</h1>
						<dl className="federation">
							<div className="division">
								<dt className="division-title">Men</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.ipl.men)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Women</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.ipl.women)}</tt></dd>
							</div>
						</dl>
					</section>
					<section className="results-section">
						<h1 className="results-heading">IPF/USAPL</h1>
						<dl className="federation">
							<div className="division">
								<dt className="division-title">Men</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.ipf.men)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Women</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.ipf.women)}</tt></dd>
							</div>
						</dl>
					</section>
					<section className="results-section">
						<h1 className="results-heading">US Strongman</h1>
						<dl className="federation">
							<div className="division">
								<dt className="division-title">Open Strongman</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.open_strongman)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Masters Strongman</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.masters_strongman)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Teens Strongman</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.teens_strongman)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Open Strongwoman</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.open_strongwoman)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Masters Strongwoman</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.masters_strongwoman)}</tt></dd>
							</div>
							<div className="division">
								<dt className="division-title">Teens Strongwoman</dt>
								<dd className="weightclass"><tt>{weightclasses.get(this.props.convertedWeight, weightclasses.us_strongman.teens_strongwoman)}</tt></dd>
							</div>
						</dl>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default Results;
