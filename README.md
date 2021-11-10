# Classidious

Minimal Container-based Dependency Injection.

# Example

This example is an `index.js` that creates a `Parent` from `parent.js` that in turn needs a `Child` from 'child.js`.

## `index.js`

```javascript
import { Container } from 'classidious'
import { Parent } from './parent.js'

const parent = new Container('deps').get(Parent)
```

## `parent.js`

```javascript
import { Child } from './child.js'

export class Parent {
	# Note the name of this field is supplied to the Container constructor.
	static deps = [Child]
	#child

	constructor(child) {
		this.#child = child
	}
}
```

## `child.js`

```javascript
export class Child {

}
```

When testing `Parent` the `Child` dependency can be mocked by adding a alternative instance like this:

```javascript
import { Container } from 'classidious'
import { Parent } from './parent.js'
import { Child } from './child.js'

# Use your favorite mocking library.
const mockedChild = ... 
const testedParent = new Container('deps', { [Child]: mockedChild }).get(Parent)
```
