import { NodePlopAPI } from 'plop'
import { PlopGeneratorConfig } from './types'

export const appGenerator = (plop: NodePlopAPI): PlopGeneratorConfig => {
  const prompts = [
    {
      type: 'input',
      name: 'appName',
      message: 'App name'
    },
    {
      type: 'input',
      name: 'description',
      message: 'App description'
    },
    {
      type: 'input',
      name: 'port',
      message: 'Port for dev mode (ex: 3045, Check available ports)'
    },
    {
      type: 'input',
      name: 'appPath',
      message: 'App path (ex: /my-app)'
    }
  ]
  const actions = ({ appName, description, port, appPath }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'packages/app/template',
          dest: `packages/app/${appName}`,
          replaceInFiles: {
            '@andreani/template': `@andreani/${appName}`,
            '3010': port,
            'Frontend App Template': description,
            '/template': appPath,
            template: appName
          }
        }
      }
    ]
  }

  return {
    description: 'App Generator',
    prompts,
    actions
  }
}
