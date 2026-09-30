import test from 'node:test'
import assert from 'node:assert/strict'
import * as mode from '../src/utils/mode.js'

test('recruiter mode reads a saved choice and ignores unavailable storage', () => {
  assert.equal(mode.readRecruiterMode({ getItem: () => 'recruiter' }), true)
  assert.equal(mode.readRecruiterMode(() => ({ getItem: () => 'recruiter' })), true)
  assert.equal(mode.readRecruiterMode({ getItem: () => 'story' }), false)
  assert.equal(mode.readRecruiterMode({ getItem: () => { throw Error('blocked') } }), false)
  assert.equal(mode.readRecruiterMode(() => { throw Error('blocked getter') }), false)
})

test('recruiter mode saves the requested choice', () => {
  const values = []
  mode.saveRecruiterMode({ setItem: (...args) => values.push(args) }, true)
  mode.saveRecruiterMode(() => ({ setItem: (...args) => values.push(args) }), false)
  assert.deepEqual(values, [['portfolio-mode', 'recruiter'], ['portfolio-mode', 'story']])
})

test('mode switch preserves project and experience detail routes', () => {
  assert.equal(mode.modeDestination('/projects/glasses'), null)
  assert.equal(mode.modeDestination('/projects/finance-advisor'), null)
  assert.equal(mode.modeDestination('/experience/ibm'), null)
  assert.equal(mode.modeDestination('/experience/firebirds'), null)
  assert.equal(mode.modeDestination('/'), null)
  assert.equal(mode.modeDestination('/unknown'), '/')
})

test('scroll behavior respects reduced motion', () => {
  assert.equal(mode.preferredScrollBehavior(true), 'auto')
  assert.equal(mode.preferredScrollBehavior(false), 'smooth')
})
