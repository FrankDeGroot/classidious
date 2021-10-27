export class Container {
	depsName
	#instances = {}
	constructor(depsName, instances) {
		this.depsName = depsName
		this.#instances = { ...instances }
	}
	create(Class) {
		const deps = Class[this.depsName]
		return this.#instances[Class] = deps
			? new Class(...deps.map(dep =>
				this.#instances[dep] || (this.#instances[dep] = this.create(dep))))
			: new Class()
	}
}
