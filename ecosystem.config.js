module.exports = {
  apps: [
    {
      name: 'transdeco-strapi',
      script: 'npm',
      args: 'start',
      env: {
          'PORT': 1337,
          'NODE_ENV': 'production'
      },
    },
  ],
};
