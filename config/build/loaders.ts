import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

// ДЛЯ ЛОУДЕРОВ ВАЖЕН ПОРЯДОК ДОБАВЛЕНИЯ!!!
export function buildLoaders(options: BuildOptions): RuleSetRule[] {

   const svgLoader = {
     test: /\.svg$/,
     use: ['@svgr/webpack'],
   }

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader', // для обработки различных типов файлов
      exclude: /node_modules/,
    }

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: '[name]__[local]--[hash:base64:8]'
            }
          }
        },
        'sass-loader',
      ],
  }

  const fileLoader = {
      test: /\.(png|jpe?g|gif|woff|woff2)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }


    return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}
