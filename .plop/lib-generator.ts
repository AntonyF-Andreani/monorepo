import { NodePlopAPI } from 'plop'
import { PlopGeneratorConfig } from './types'

export const libGenerator = (plop: NodePlopAPI): PlopGeneratorConfig => {
  const prompts = [
    {
      type: 'input',
      name: 'libName',
      message: 'Library name'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Library description'
    }
  ]
  const actions = ({ libName, description }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'packages/shared/functions',
          dest: `packages/shared/${libName}`,
          replaceInFiles: {
            '@andreani/functions': `@andreani/${libName}`,
            'Templated shared functions': description
          }
        }
      }
    ]
  }

  return {
    description: 'Shared Module Generator',
    prompts,
    actions,
  }
}
