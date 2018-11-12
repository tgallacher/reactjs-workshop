module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
      useBuiltIns: 'usage',
      forceAllTransforms: true,
    }],
    '@babel/preset-react',
  ],
  plugins: [
    'babel-plugin-emotion',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-async-to-generator',
    ['babel-plugin-module-resolver', {
      root: ['./src'],
      extensions: ['.js', '.jsx'],
    }],
  ],
  env: {
    development: {
      plugins: [
        ['babel-plugin-emotion', { sourceMap: true, autoLabel: true }],
      ],
    },
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current',
          },
        }],
      ],
    },
  },
}
