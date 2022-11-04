import { Test } from './Test';

export class Sub extends Test {
	c;

	constructor(b: string, c: string) {
		super(b);
		this.c = c;
	}

	public run() {
		console.log('Sub run', this.c);
	}
}
