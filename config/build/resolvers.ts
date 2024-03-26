import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // чтобы в импортах не указывать тип файла
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
  }
}