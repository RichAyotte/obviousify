/**
 * @overview    Bank account actor
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2018-12-11 16:28:09
 * @license     GNU GPL-3.0
 */

'use strict'

const id = Symbol('prototype id')

/* Prototype */
const prototype = {
	deposit({
		amount = 0
		, output
	}) {
		const balance = this.balance + amount
		this.balance = {
			id
			, balance
		}
		if (output === 'balance') {
			return this.balance
		}
	}
	, withdraw({
		amount = 0
		, output
	}) {
		const balance = this.balance - amount
		this.balance = {
			id
			, balance
		}
		if (output === 'balance') {
			return this.balance
		}
	}
}

module.exports = () => {
	let balance = 0
	return new Proxy(
		Object.create(prototype, {
			balance: {
				get() {
					return balance
				}
				, set(value) {
					if (
						typeof value !== `object`
						|| value.id !== id
						|| typeof value.balance !== `number`
					) {
						throw new Error(`Setting properties directly is forbidden.`)
					}
					({balance} = value)
				}
			}
		})
		, {
			defineProperty(target, key) {
				if (key in target) {
					return true
				}
				throw new Error(`Creating new properties is forbidden.`)
			}
			, deleteProperty() {
				throw new Error(`Deleting properties is forbidden.`)
			}
		}
	)
}
