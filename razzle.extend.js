const plugins = (defaultPlugins) => {
  return defaultPlugins;
};
const modify = (config, { target, dev }, webpack) => {
  const prefixPath = '/imsres';
  if (prefixPath) {
    if (target === 'web' && dev) {
      config.devServer.publicPath = prefixPath;
    }
    const pp = config.output.publicPath;
    config.output.publicPath = `${pp}${prefixPath.slice(1)}/`;
  }
  return config;
};

module.exports = {
  plugins,
  modify,
};
