import { C } from './c.js'
import { D } from './d.js'

export class B {
	static needs = [C, D]
	#c
	#d
	constructor(c, d) {
		this.#c = c
		this.#d = d
	}
	b() {
		return 'b' + this.#c.c() + this.#d.d()
	}
}
