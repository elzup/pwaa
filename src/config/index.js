// @flow

import _combineReducers from './combineReducers'
const { NODE_ENV } = process.env

if (!NODE_ENV) {
	console.error(process.env)
	throw Error('Configuration not completed. must setup envioraments.')
}

type Config = {
	+isDev: boolean,
}
const isDev = NODE_ENV === 'development'

const configDevelopment = {}
const configProduction = {}

const config: Config = {
	isDev,
	...(isDev ? configDevelopment : configProduction),
}

export const combineReducers = _combineReducers

export default config
