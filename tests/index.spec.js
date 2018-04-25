'use strict'

const path = require('path')

const nuxtBabelModule = require('..')

function resolveFixture (relativePath) {
  return path.resolve(__dirname, 'fixtures', relativePath)
}

describe('nuxt-babel', () => {
  let context
  let bound

  beforeEach(() => {
    context = {options: {build: {}}}
    bound = nuxtBabelModule.bind(context)
  })

  it('with .babelrc', () => {
    bound({ directory: resolveFixture('with-babelrc') })
    expect(context.options.build.babel).toEqual({ preset: 'env' })
  })

  it('with .babelrc.js', () => {
    bound({ directory: resolveFixture('with-babelrc-js') })
    expect(context.options.build.babel).toEqual({ preset: 'env' })
  })

  it('with package.json', () => {
    bound({ directory: resolveFixture('with-package-json') })
    expect(context.options.build.babel).toEqual({ preset: 'env' })
  })

  it('without babel files', () => {
    bound({ directory: resolveFixture('withot') })
    expect(context.options.build.babel).toEqual(undefined)
  })
})
