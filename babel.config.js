module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV === 'development');

  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: { proposals: true, version: 3 },
        targets: { node: '8.16' },
        useBuiltIns: 'usage',
      },
    ],
    ['@babel/preset-typescript'],
  ];

  const plugins = ['@babel/plugin-proposal-optional-chaining'];

  const env = {
    test: { plugins: ['istanbul'] },
  };

  return { presets, plugins, env };
};
