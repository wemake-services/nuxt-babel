/**
 * Copyright (c) 2018-present, wemake.services
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const fs = require('fs')

const findBabelConfig = require('find-babel-config')

function nuxtBabel (options) {
  const directory = options.directory || process.cwd()
  const { file, config } = findBabelConfig.sync(directory)

  if (file) {
    // See: https://nuxtjs.org/api/configuration-build/#babel
    this.options.build.babel = config
  }
}

module.exports = nuxtBabel
module.exports.meta = require('../package.json')
