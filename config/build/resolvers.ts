import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // чтобы в импортах не указывать тип файла
  }
}