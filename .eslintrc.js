/**
 * @overview    eslint config
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2018-10-19 11:23:02
 * @license     GNU GPL-3.0
 */

'use strict'

module.exports = {
	env: {
		'jest/globals': true
		, node: true
	}
	, extends: ['ayotte']
	, plugins: ['jest']
}
