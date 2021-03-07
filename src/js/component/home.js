import React from "react";
import PropTypes from "prop-types";
//create your first component
export function Home(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="six"> {props.nSix % 10} </div>
			<div className="five"> {props.nFive % 10} </div>
			<div className="four"> {props.nFour % 10} </div>
			<div className="three"> {props.nThree % 10} </div>
			<div className="two"> {props.nTwo % 10} </div>
			<div className="one"> {props.nOne % 10} </div>
		</div>
	);
}
Home.propTypes = {
	nSix: PropTypes.number,
	nFive: PropTypes.number,
	nFour: PropTypes.number,
	nThree: PropTypes.number,
	nTwo: PropTypes.number,
	nOne: PropTypes.number
};
