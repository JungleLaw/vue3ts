export class Test {
	b: string = 'c';

	constructor(b: string) {
		this.b = b;
	}

	public run() {
		console.log('Test run', this.b);
		this.execute();
	}

	private execute() {
		console.log('Test execute');
	}
}
