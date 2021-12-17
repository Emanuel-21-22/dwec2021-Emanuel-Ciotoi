class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Rabbit extends Animal {
	constructor(name) {
		// this.name = name; <- doesn't call the class Animal constructor
		super(name);
		this.created = Date.now();
	}
}

const rabbit = new Rabbit('White Rabbit');

console.log(rabbit.name);
