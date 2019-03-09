'use strict'

const path = require('path')

const nuxtBabelModule = require('../src')

function resolveFixture (relativePath) {
  return path.resolve(__dirname, 'fixtures', relativePath)
}

describe('nuxt-babel', () => {
  let context
  let bound

  beforeEach(() => {
    context = { options: { build: {} } }
    bound = nuxtBabelModule.bind(context)
  })

  it('with .babelrc', () => {
    bound({ directory: resolveFixture('with-babelrc') })
    expect(context.options.build.babel).toEqual({ presets: 'env' })
  })

  it('with .babelrc.js', () => {
    bound({ directory: resolveFixture('with-babelrc-js') })
    expect(context.options.build.babel).toEqual({ presets: 'env' })
  })

  it('with package.json', () => {
    bound({ directory: resolveFixture('with-package-json') })
    expect(context.options.build.babel).toEqual({ presets: 'env' })
  })

  it('with babel.config.js', () => {
    bound({ directory: resolveFixture('with-babel-config-js') })
    expect(context.options.build.babel).toEqual({ presets: 'env' })
  })

  it('without babel files', () => {
    bound({ directory: resolveFixture('without') })

    // It will go up and find out own `.babelrc`:
    expect(context.options.build.babel.presets[0][0]).toEqual('env')
  })

  it('without config', () => {
    bound()

    // It will go up and find out own `.babelrc`:
    expect(context.options.build.babel.presets[0][0]).toEqual('env')
  })

  it('with empty config', () => {
    bound({})

    // It will go up and find out own `.babelrc`:
    expect(context.options.build.babel.presets[0][0]).toEqual('env')
  })
})
