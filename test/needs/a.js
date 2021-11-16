import { B } from './b.js'

export class A {
	static needs = [B]
	#b
	constructor(b) {
		this.#b = b
	}
	a() {
		return 'a' + this.#b.b()
	}
}
