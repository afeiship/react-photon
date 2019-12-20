module.exports = (inEnv) => {
  const { NODE_ENV } = process.env;
  return require(`./build/webpack.${NODE_ENV}.conf`)(inEnv);
};
