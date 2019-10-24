import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClockTime extends Component {

	componentDidMount() {

		var timer = function () {
			var d = new Date();
			var t = d.toLocaleTimeString();
			document.getElementById("clocktime").innerHTML = t;

			setInterval(timer, 1000);
		}

		window.onload = timer();

	}

	render() {
		return (
			<div id="clocktime"></div>
		)
	}
}

// #####################################

class CountdownTimer extends Component {

	componentDidMount() {

		function countdownTimer(element, date, time) {

			'use strict';

			var setCountdown;

			if (time == null || time == "") {

				setCountdown = new Date(date).getTime();

			} else if ((date != null || date != "") && (time != null || time != "")) {

				setCountdown = new Date(date + "T" + time + "Z").getTime();

			} else {

				console.log("Date and/or time format is wrong!");

			}

			var x = setInterval(function () {

				var now = new Date().getTime();

				var distance = setCountdown - now;

				var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
					hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
					minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
					seconds = Math.floor((distance % (1000 * 60)) / 1000);

				var daysText,
					hoursText,
					minutesText,
					secondsText;

				if (days == 1) { daysText = " day " } else { daysText = " days " }
				if (hours == 1) { hoursText = " hour " } else { hoursText = " hours " }
				if (minutes == 1) { minutesText = " minute " } else { minutesText = " minutes " }
				if (seconds == 1) { secondsText = " second " } else { secondsText = " seconds " }

				var elementExist = document.getElementById(element);

				if (distance < 0) {

					clearInterval(x);

					elementExist.innerHTML = "EXPIRED";

				} else {

					elementExist.innerHTML = days + daysText + hours + hoursText + minutes + minutesText + seconds + secondsText;

				}

			}, 1000);

		}

		window.onload = countdownTimer(this.props.id, this.props.date, this.props.time);

	}

	render() {
		return (
			<div id={this.props.id}></div>
		)
	}
}

CountdownTimer.propTypes = {
	id: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string
}

export {
  ClockTime,
  CountdownTimer
}