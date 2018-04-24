/**
 * Copyright (c) 2018-present, wemake.services
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const fs = require('fs')

const findBabelConfig = require('find-babel-config')

function nuxtBabelModule (options) {
  const directory = options.directory || process.cwd()
  const { file } = findBabelConfig.sync(directory)

  if (file) {
    const fileContents = JSON.parse(fs.readFileSync(file))

    // See: https://nuxtjs.org/api/configuration-build/#babel
    this.options.build.babel = fileContents
  }
}

module.exports = nuxtBabelModule
module.exports.meta = require('./package.json')
