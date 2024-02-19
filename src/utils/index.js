import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// read archive json
export function readJsonFile(filePath) {
  return require('../' + filePath)
}
