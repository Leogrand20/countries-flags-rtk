import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const alias: Record<string, string> = {
  '@': resolve(__dirname, 'src'),
  '@public': resolve(__dirname, 'public'),
  '@css': resolve(__dirname, 'src/app/styles'),
  '@icons': resolve(__dirname, 'src/shared/assets/icons'),
  '@img': resolve(__dirname, 'src/shared/assets/img'),
  '@fonts': resolve(__dirname, 'src/shared/assets/fonts'),
  '@shared': resolve(__dirname, 'src/shared'),
  '@app': resolve(__dirname, 'src/app'),
  '@components': resolve(__dirname, 'src/components'),
  '@hooks': resolve(__dirname, 'src/hooks'),
  '@layouts': resolve(__dirname, 'src/layouts'),
  '@pages': resolve(__dirname, 'src/pages'),
  '@store': resolve(__dirname, 'src/store'),
  '@utils': resolve(__dirname, 'src/utils'),
}

