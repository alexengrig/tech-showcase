// @ts-ignore
import { readFileSync } from 'fs'
// @ts-ignore
import { load as loadYaml } from 'js-yaml'

import type { ShowcaseData } from '$lib/types'

let data: ShowcaseData | null = null

export const load = async(): Promise<ShowcaseData> => {
  if (!data) {
    try {
      const content = readFileSync('src/data/demo.yml')
      data = loadYaml(content) as ShowcaseData
    } catch (error) {
      throw new Error('Failed to load data')
    }
  }
  return data
}
