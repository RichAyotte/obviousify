/**
 * @overview    Obviousify test
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2018-12-11 15:54:30
 * @license     GNU GPL-3.0
 */

'use strict'

const createAccount = require('./bank-account')
const bankAccountA = createAccount()
const bankAccountB = createAccount()

test('bankAccountA cannot add new properties', () => {
	expect(() => {
		bankAccountA.somerandprop = 1
	})
	.toThrow()
})

test('bankAccountA cannot directly change properties', () => {
	expect(() => {
		bankAccountA.balance = 1
	})
	.toThrow()
})

test('bankAccountA can deposit 2140', () => {
	bankAccountA.deposit({amount: 100})
	bankAccountA.deposit({amount: 320})
	bankAccountA.deposit({amount: 640})
	bankAccountA.deposit({amount: 1080})
	expect(bankAccountA.balance)
	.toBe(2140)
})

test('bankAccountB can deposit 777', () => {
	bankAccountB.deposit({amount: 777})
	expect(bankAccountB.balance)
	.toBe(777)
})

test('bankAccountA is not equal to bankAccountB balance', () => {
	bankAccountA.deposit({amount: 1})
	expect(bankAccountA.balance)
	.not.toBe(bankAccountB.balance)
})
