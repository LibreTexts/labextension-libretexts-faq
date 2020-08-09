import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'labextension-libretexts-faq',
  autoStart: true,
  requires: [IMainMenu],
  activate: (app: JupyterFrontEnd, mainMenu: IMainMenu) => {
    app.commands.addCommand('libretexts-open-faq', {
      label: 'LibreTexts JupyterHub FAQ',
      execute: () => {
        return app.commands.execute('help:open', {
          url: 'https://jupyter.libretexts.org/hub/static/external/pages/faq.html',
          text: 'LibreTexts JupyterHub FAQ'
        });
      }
    });
    mainMenu.helpMenu.addGroup([{ command: 'libretexts-open-faq' }], 0);
  }
};

export default extension;
