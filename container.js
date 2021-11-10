export class Container {
	depsName
	#instances = {}
	constructor(depsName, instances) {
		this.depsName = depsName
		this.#instances = { ...instances }
	}
	get(Class) {
		const deps = Class[this.depsName]
		return this.#instances[Class] || (
			this.#instances[Class] = deps
				? new Class(...deps.map(dep => this.get(dep)))
				: new Class()
		)
	}
}
