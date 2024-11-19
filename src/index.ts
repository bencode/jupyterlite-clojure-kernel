import { JupyterLiteServer, JupyterLiteServerPlugin } from '@jupyterlite/server'

import { IKernel, IKernelSpecs } from '@jupyterlite/kernel'
import { ClojureKernel } from './kernel'

// import jsLogo32 from '../style/icons/logo-32x32.png';
// import jsLogo64 from '../style/icons/logo-64x64.png';

const kernel: JupyterLiteServerPlugin<void> = {
  id: '@jupyterlite/clojure-kernel-extension:kernel',
  autoStart: true,
  requires: [IKernelSpecs],
  activate: (app: JupyterLiteServer, kernelspecs: IKernelSpecs) => {
    kernelspecs.register({
      spec: {
        name: 'clojure',
        display_name: 'Clojure',
        language: 'clojure',
        argv: [],
        resources: {
          // 'logo-32x32': jsLogo32,
          // 'logo-64x64': jsLogo64,
        },
      },
      create: async (options: IKernel.IOptions): Promise<IKernel> => {
        return new ClojureKernel(options)
      },
    })
  },
}

const plugins: JupyterLiteServerPlugin<any>[] = [kernel]

export default plugins
