# angular-typescript-boilerplate
angular 1.5, typescript, webpack


fixed issue debugging karma tests => source maps are not produced, .ts files contain transpiled javascript when viewing in browser debugger.

see webpack.config.js

plugins: [
      new webpack.SourceMapDevToolPlugin({
          filename: null, // if no value is provided the sourcemap is inlined
          test: /\.(ts|js)($|\?)/i // process .js and .ts files only
      })
    ],
