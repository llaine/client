module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', 
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx'],
          alias: {
            'services': './src/services',
            'components': './src/components',
            'actions': './src/actions',
            'reducers': './src/reducers'
          }
        }
      ]
    ]
  };
};
