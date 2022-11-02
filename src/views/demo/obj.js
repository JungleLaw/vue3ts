class Test {
	b = 'c';

	constructor(b) {
		this.b = b;
	}

	run() {
		console.log('Test run', this.b);
		this.#execute();
	}

	#execute() {
		console.log('Test execute');
	}
}

class Sub extends Test {
	c;

	constructor(b, c) {
		super(b);
		this.c = c;
	}

	run() {
		console.log('Sub run', this.c);
	}
}

export { Sub, Test };
