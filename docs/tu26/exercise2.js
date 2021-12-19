class Clock {
	constructor({ template }) {
		this.template = template;
	}

	render() {
		let date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	}
}

class ExtendedClock extends Clock {
	constructor(clock) {
		super(clock);
		// let { precision = 1000 } = clock;
		// this.precision = precision;
		this.precision = clock.precision ?? 1000;
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), this.precision);
	}
}

const clockFormat = {
	template: 'Hour h Minute m Second s',
};

const clockFormat3 = {
	template: 'h:m:s',
	precision: 3000,
};

const clock = new ExtendedClock(clockFormat);
clock.start();

const clock2 = new ExtendedClock(clockFormat3);
clock2.start();

setTimeout(() => {
	clock.stop();
	clock2.stop();
}, 7000);
