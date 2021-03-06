module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      modules: false,
      loose: true
    }]
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ],
  env: {
    production: {
      plugins: [
        ['transform-react-remove-prop-types', { removeImport: true }]
      ]
    },
  }
};
