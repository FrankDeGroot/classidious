import assert from 'assert/strict'
import { Container } from '../container.js'
import { A } from './a.js'
import { B } from './b.js'

export class ContainerTest {
	#container = new Container('needs')
	shouldCreate() {
		assert.equal(this.#container.create(A).a(), 'abcd')
	}
	shouldUsePredefinedInstance() {
		this.#container = new Container('needs', {
			[B]: new class {
				b() {
					return 'B'
				}
			}
		})
		assert.equal(this.#container.create(A).a(), 'aB')
	}
}
