# nuxt-babel

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/nuxt-babel.svg?branch=master)](https://travis-ci.org/wemake-services/nuxt-babel) [![Coverage Status](https://coveralls.io/repos/github/wemake-services/nuxt-babel/badge.svg?branch=master)](https://coveralls.io/github/wemake-services/nuxt-babel?branch=master)


This plugin allows to have normal `.babelrc` file with your `nuxt` app!

While traditional `nuxt` app
[requires](https://nuxtjs.org/api/configuration-build/#babel)
that you specify all your `babel`
configuration inside the `nuxt.config.js`,
some other tools (like `jest`)
require [the traditional approach](https://babeljs.io/docs/usage/babelrc/)
with `.babelrc`.

This plugin gracefully injects your `.babelrc` into your `nuxt` configuration
allowing you to have the best from both worlds.

We also support `.babelrc.js`, `babel.config.js`, and `package.json` files.


## Installation

```
npm install --save nuxt-babel
```

Add `nuxt-babel` to your `nuxt.config.js`:

```js
{
  modules: [
    'nuxt-babel',
  ]
}
```


## Options

You can also specify directory containing your `babel` configuration:

```js
{
  modules: [
    ['nuxt-babel', { directory: './some/path/' },
  ]
}
```


## License

MIT.
