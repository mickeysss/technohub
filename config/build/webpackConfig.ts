import { Configuration } from 'webpack'

import { BuildOptions } from './types/config';
import { buildPlugins } from './plugins';
import { buildLoaders } from './loaders';
import { buildResolvers } from './resolvers';
import { buildDevServer } from './devServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,

  }
}